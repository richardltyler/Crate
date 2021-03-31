// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import { grey, grey2, grey3 } from '../../ui/common/colors'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'

// APP IMPORTS
import { APP_URL } from '../../setup/config/env'


const Form = (props) => {

  const [stateSample, setStateSample] = useState({})

  return (
    <section>
      <Grid >
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 >{ props.data.categoryTitle }</H4>

          <p style={{ marginTop: '1em', color: grey3 }}>Please select at least one option, then click `NEXT` to continue...</p>
        </GridCell>
      </Grid>

      <Grid>
        <GridCell justifyCenter={true}>
          <ImageTile width={170} height={250} shadow={level1} image={`${ APP_URL }/images/stock/men/2.jpg`}/>
        </GridCell>
        <GridCell justifyCenter={true}>
          <ImageTile width={170} height={250} shadow={level1} image={`${ APP_URL }/images/stock/men/1.jpg`}/>
        </GridCell>
        <GridCell justifyCenter={true}>
          <ImageTile width={170} height={250} shadow={level1} image={`${ APP_URL }/images/stock/men/2.jpg`}/>
        </GridCell>
      </Grid>

      <Button type="button" theme="secondary" disabled={false}>
      Next ➤
      </Button>
    </section>
  )
}

export default Form;
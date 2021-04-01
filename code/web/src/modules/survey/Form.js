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

  const [stateSample, setStateSample] = useState({});

  const options = props.data.photos.map((photo, i) =>
    <GridCell key={i} justifyCenter={true}>
      <ImageTile width={170} height={250} shadow={level1} image={photo.src}/>
    </GridCell>
  )

  return (
    <section>
      <Grid>
        <GridCell >
          <Grid >
            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H4>{ props.data.category }</H4>
              <p style={{ marginTop: '1em', color: grey3 }}>Please select at least one option, then click `NEXT` to continue...</p>
            </GridCell>
          </Grid>

          <Grid style={{ padding: '3em'}}>
            {options}
          </Grid>
        </GridCell>
      </Grid>
      <Button type="button" theme="secondary" disabled={false}>
      Next ➤
      </Button>
    </section>
  )
}

export default Form;

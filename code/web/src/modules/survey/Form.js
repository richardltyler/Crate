// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'

const Form = (props) => {

  const [stateSample, setStateSample] = useState({})

  return (

    <>
    <H4 >{ props.data.categoryTitle }</H4>
    <p style={{ marginTop: '1em', color: grey2 }}>Please select at least one option, then click `NEXT` to continue...</p>
    
    <Button type="button" theme="secondary" disabled={false}>
    Next ➤
    </Button>

    <Grid>
      <GridCell justifyCenter={true}>
        <ImageTile width={170} height={250} shadow={level1} image={`${ APP_URL }/images/stock/men/2.jpg`}/>
      </GridCell>
      <GridCell justifyCenter={true}>
        <ImageTile width={170} height={250} shadow={level1} image={`${ APP_URL }/images/stock/men/2.jpg`}/>
      </GridCell>
      <GridCell justifyCenter={true}>
        <ImageTile width={170} height={250} shadow={level1} image={`${ APP_URL }/images/stock/men/2.jpg`}/>
      </GridCell>
    </Grid>
    </>

  )
}

export default Form;
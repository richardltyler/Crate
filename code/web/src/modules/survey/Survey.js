// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import Form from './Form'

class Survey extends Component {
  constructor() {
    super(); 
    this.state = {
      selections: {
        tops: [],
        bottoms: [],
        accessories: [],
        shoes: [],
      },
      currentCategoryIndex: 0
    }; 
  }
  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Style survey- Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Style Survey</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>Let's learn a little bit about your style!</p>
          </GridCell>
        </Grid>

        <Form data={{categoryTitle: 'tops'}}/>
      </div>
    )
  }
}

export default Survey;
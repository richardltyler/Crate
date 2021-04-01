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
import Button from '../../ui/button'

// App Imports
import Form from './Form'
import { APP_URL } from '../../setup/config/env'

const data = { "masculine":
  [
    {
      "category": "tops",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "bottoms",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "shoes",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "accessories",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "formal",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    }
  ],

"feminine":
  [
    {
      "category": "tops",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "bottoms",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "shoes",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "accessories",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    },
    {
      "category": "formal",
      "photos": [
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "classic"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "edgy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "sporty"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "preppy"},
        {"src": `${ APP_URL }/images/stock/men/2.jpg`,
        "style": "trendy"}
      ]
    }
  ]
}

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

  handleNextClick = () => {
    this.setState({currentCategoryIndex: this.state.currentCategoryIndex + 1});
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

        <Form data={data.masculine[this.state.currentCategoryIndex]}/>
        <Button type="button" theme="secondary" disabled={false} onClick={() => this.handleNextClick()}>
        Next ➤
        </Button>
      </div>
    )
  }
}

export default Survey;

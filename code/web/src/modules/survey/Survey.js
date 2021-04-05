// Imports
import { connect } from 'react-redux'
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
import { getList as getProductList } from '../product/api/actions'
import Loading from '../common/Loading'

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

  // handleNextClick = () => {
  //   this.setState({currentCategoryIndex: this.state.currentCategoryIndex + 1});
  // }
  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getProductList())
  }

  // Runs on client only
  componentDidMount() {
    this.props.getProductList()
    // console.log(this.props.getProductList())
  }

  render() {
    // const { isLoading, list } = this.props.products

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

       { /* <Form data={data.masculine[this.state.currentCategoryIndex]}/>
         <Button type="button" theme="secondary" disabled={false} onClick={() => this.handleNextClick()}>
         Next ➤
        </Button>*/ }
      </div>
    )
  }
}

// Survey.propTypes = {
//   user: PropTypes.object.isRequired,
//   products: PropTypes.object.isRequired,
//   getProductList: PropTypes.func.isRequired
// }

function surveyState(state) {
  return {
    user: state.user,
    products: state.products
  }
}

export default connect(surveyState, { getProductList })(Survey)
// export default Survey

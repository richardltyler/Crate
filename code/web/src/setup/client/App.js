// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
// // Annotations
// // the routes object is being imported 
import { routes } from '../../setup/routes'
import Layout from '../../modules/common/Layout'
import NotFound from '../../modules/common/NotFound'
import RoutePrivate from '../../modules/auth/RoutePrivate'

const App = () => (
  <Layout>
    <Switch>
      {/* {the routes that were declared in the routes directary are being mapped through and created here } */}
      
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}

      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App

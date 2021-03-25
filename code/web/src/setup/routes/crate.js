// App Imports
import List from '../../modules/crate/List'


// Crate routes
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}

// Annotations
// // See web/src/setup/routes/index for notes on the routes


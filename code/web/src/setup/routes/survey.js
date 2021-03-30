// App Imports
import Survey from '../../modules/survey/Survey'

// Crate routes
export default {
  list: {
    path: '/style-preferences',
    component: Survey,
    auth: true
  }
}

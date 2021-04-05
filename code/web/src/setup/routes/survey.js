// App Imports
import Survey from '../../modules/survey/Survey'

// Crate routes
export default {
  survey: {
    path: '/style-preferences',
    component: Survey,
    auth: true
  }
}

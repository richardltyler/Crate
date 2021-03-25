// App Imports
import { APP_URL_API } from '../config/env'
import admin from './admin'
import home from './home'
import user from './user'
import product from './product'
import crate from './crate'

// Combined routes
export const routes = Object.assign(admin, home, user, product, crate)

// API Routes
export const routeApi = APP_URL_API

// Image
export const routeImage = APP_URL_API

// Annotations 
// for Router in this whole App
// // Each of the imports between lines 2 and 7 are objects with values that get passed into this routes object at line 10
// // When those that routes object is imported, the values from the objects' keys are being assigned to different parts of React Router components
// // Basically, they look strange at first, but they are using Router exactly the way we know how to, just organizing the data that we know to be necessary for a Route or Link component in a more managable way 

// // The routes are being created in web/src/setup/client/App
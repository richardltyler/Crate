// App Imports
import Detail from '../../modules/product/Detail'

// Product routes
export default {
  product: {
    // Annotations
    // // slug is a commonly used term of art (not a resserved keyword) in programming that describes the part of a URL that explains the page's content
    // // using the path at line 10 as an example, the `/product` part does not describe the content of the page, but the next part does. That is why it is designated as the **slug**
    path: (slug = ':slug') => (`/product/${ slug }`),
    component: Detail
  }
}

// Annotations
// // See web/src/setup/routes/index for notes on the routes

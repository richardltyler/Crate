// Imports
import { configure } from '@storybook/react'

function loadStories() {
  require('./stories/common.js'),
    require('./stories/buttons.js'),
    require('./stories/typography.js'),
    require('./stories/icons.js'),
    require('./stories/input.js'),
    require('./stories/modal.js'),
    require('./stories/card.js'),
    require('./stories/grid.js')
}

//Annotations
//if using storybook to preview our addition, will add require statement for our new stories file
//run storybook with `npm run storybook` **this is currently throwing error, possibly related to webpack or babel configuration

configure(loadStories, module)

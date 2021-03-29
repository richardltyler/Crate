// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'

// UI Imports
import { Input, Textarea, Select } from '../../src/ui/input'

// Buttons
storiesOf('Input', module)
  .add('text', () => (
    <Input type="text" />
  ))
  .add('password', () => (
    <Input type="password" />
  ))
  .add('textarea', () => (
    <Textarea />
  ))
  .add('select', () => (
    <Select>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </Select>
  ))

  /* COULD use Select for survey, in which case its already been drafted here function needs to load up survey instead, conditional on whether user already has styling preferences --
  will we have preferences available through state.user or will we have to make a request to find out?? If survey is taken,
  we need to transfer logic for subscribing to survey submission*/

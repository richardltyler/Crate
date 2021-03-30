// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import PreferenceType from './types'
import { create, update, remove } from './resolvers'

// Preference create
export const preferenceCreate = {
  type: PreferenceType,
  args: {
    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Preference update
export const preferenceUpdate = {
  type: PreferenceType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    description: {
      name: 'description',
      type: GraphQLString
    },
  },
  resolve: update
}

// Preference remove
export const preferenceRemove = {
  type: PreferenceType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
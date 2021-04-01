// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import PreferenceType from './types'
import { getById, getByUser, getAll } from './resolvers'

// Preferences All
export const preferences = {
  type: new GraphQLList(PreferenceType),
  resolve: getAll
}

// Preference by user
export const PreferenceByUser = {
  type: new GraphQLList(PreferenceType),
  resolve: getByUser
}

// Preference By id
export const preference = {
  type: PreferenceType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
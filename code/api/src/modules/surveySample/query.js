// Imports
import { GraphQLString, GraphQLList } from 'graphql'

// App Imports
import SurveySampleType from './types'
import { getAll, getByStyle, getByCategory } from './resolvers'

// surveySamples All
export const surveySamples = {
  type: new GraphQLList(SurveySampleType),
  resolve: getAll
}

// SurveySample By style
export const surveySampleByStyle = {
  type: SurveySampleType,
  args: {
    style: { type: GraphQLString }
  },
  resolve: getByStyle
}

// SurveySample By category
export const surveySampleByCategory = {
  type: SurveySampleType,
  args: {
    category: { type: GraphQLString }
  },
  resolve: getByCategory
}
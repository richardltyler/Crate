// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Product type
const SurveySampleType = new GraphQLObjectType({
  name: 'surveySample',
  description: 'SurveySample Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLInt },
    gender: { type: GraphQLInt },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    style: { type: GraphQLString },
    category: { type: GraphQLString},
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SurveySampleType
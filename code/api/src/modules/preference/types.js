// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'

// Subscription type
const PreferenceType = new GraphQLObjectType({
  name: 'preference',
  description: 'Preference Type',

  fields: () => ({
    id: { type: GraphQLInt },
    description: { type: GraphQLString },
    user: { type: UserType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default PreferenceType
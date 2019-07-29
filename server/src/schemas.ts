import { gql } from "apollo-server"

export default gql`
  input LoginInput {
    accessKey: String
    username: String
    password: String
  }

  type Query {
    """
    Returns a test message
    """
    testMessage: String!
  }

  type Mutation {
    login(model: LoginInput!): String
  }
`
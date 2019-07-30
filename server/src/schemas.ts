import { gql } from "apollo-server"

export default gql`
  type AuthResult {
    authToken: String
    errorDescription: String
  }

  type Query {
    health: String
  }

  type Mutation {
    login(accessKey: String!): AuthResult
    adminLogin(username: String!, password: String!): AuthResult
  }
`
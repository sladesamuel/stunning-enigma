import { gql } from "apollo-server"

export default gql`
  type AuthResult {
    authToken: String
    errorDescription: String
  }

  type User {
    username: String
  }

  type Query {
    health: String
    users: [User]
  }

  type Mutation {
    login(accessKey: String!): AuthResult
    adminLogin(username: String!, password: String!): AuthResult
  }
`
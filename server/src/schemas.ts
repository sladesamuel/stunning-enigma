import { gql } from "apollo-server"

export default gql`
  input LoginInput {
    accessKey: String
    username: String
    password: String
  }

  type Mutation {
    login(model: LoginInput!): String
  }
`
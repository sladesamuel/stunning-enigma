import { gql } from "apollo-server"

export default gql`
  type Query {
    """
    Returns a test message
    """
    testMessage: String!
  }
`
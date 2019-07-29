import { merge } from "lodash"
import Login from "./Login"

const resolvers = merge({
  Query: {

  }
}, Login)

export default resolvers
import { login } from "../security"

const resolvers = {
  Mutation: {
    login: (_: any, args: any) => login(args.model)
  }
}

export default resolvers
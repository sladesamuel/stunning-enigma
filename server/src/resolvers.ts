import { login } from "./security"

export default {
  Query: {
    testMessage: (): string => {
      return "Hello, World"
    }
  },
  Mutation: {
    login: (_: any, args: any) => login(args.model)
  }
}
import { login, adminLogin } from "./security"
import Users from "./models/users"

export default {
  Query: {
    health: () => "OK",
    users: async () => await Users.find()
  },
  Mutation: {
    login: (_: any, args: any) => login(args.accessKey),
    adminLogin: (_: any, args: any) => adminLogin(args.username, args.password)
  }
}
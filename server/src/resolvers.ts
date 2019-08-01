import { login, adminLogin } from "./security"
import { getUsers } from "./models/Users"

export default {
  Query: {
    health: () => "OK",
    users: async () => await getUsers()
  },
  Mutation: {
    login: (_: any, args: any) => login(args.accessKey),
    adminLogin: (_: any, args: any) => adminLogin(args.username, args.password)
  }
}
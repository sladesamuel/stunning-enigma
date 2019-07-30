import { login, adminLogin } from "./security"

export default {
  Query: {
    health: () => "OK"
  },
  Mutation: {
    login: (_: any, args: any) => login(args.accessKey),
    adminLogin: (_: any, args: any) => adminLogin(args.username, args.password)
  }
}
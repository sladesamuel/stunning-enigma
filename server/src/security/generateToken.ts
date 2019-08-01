import jwt from "jsonwebtoken"
import { environment } from "../environment"
import { User } from "../models/Users"

const generateToken = (user: User): string =>
  jwt.sign({
    username: user.username,
    role: user.role
  }, environment.security.tokenKey)

export default generateToken
import bcrypt from "bcrypt"
import AuthResult, { createErrorResult, createSuccessResult } from "./AuthResult"
import { getUserByUsername } from "../models/Users"

export const adminLogin = async (username: string, password: string): Promise<AuthResult> => {
  if (!username || !password) {
    return createErrorResult("Missing username and/or password")
  }

  const user = await getUserByUsername(username)
  if (!user) {
    return createErrorResult("User does not exist")
  }

  if (!await bcrypt.compare(password, user.password)) {
    return createErrorResult("The password is incorrect")
  }

  if (user.role !== "admin") {
    return createErrorResult("This user is not authorized for admin access")
  }

  // TODO: Generate the access key.
  return createSuccessResult("TODO: Access Key")
}
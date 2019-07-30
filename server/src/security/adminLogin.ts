import AuthResult, { createErrorResult, createSuccessResult } from "./AuthResult";

export const adminLogin = (username: string, password: string): AuthResult => {
  if (!username || !password) {
    return createErrorResult("Missing username and/or password")
  }

  // TODO: Lookup user from data source by username and check password and for admin access.
  if (username !== "admin" || password !== "test") {
    return createErrorResult("Invalid username and/or password")
  }

  return createSuccessResult("TODO: Access Key")
}
import AuthResult, { createErrorResult, createSuccessResult } from "./AuthResult";

export const login = (accessKey: string): AuthResult => {
  // TODO: Check in the data source for a matching access key and make sure it hasn't expired.
  if (!accessKey) {
    return createErrorResult("No access key given")
  }

  if (accessKey !== "test") {
    return createErrorResult("Invalid access key")
  }

  return createSuccessResult("TODO: Access Key")
}
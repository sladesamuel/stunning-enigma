export default interface AuthResult {
  authToken?: string
  errorDescription?: string
}

export const createSuccessResult = (authToken: string): AuthResult => ({ authToken })
export const createErrorResult = (errorDescription: string): AuthResult => ({ errorDescription })
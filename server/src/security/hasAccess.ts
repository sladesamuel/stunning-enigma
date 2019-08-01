import jwt from "jsonwebtoken"
import { environment } from "../environment"

const hasAccess = (token: string, requiredRole: string): boolean => {
  const decodedToken = <any> jwt.verify(token, environment.security.tokenKey)

  if (!decodedToken) {
    return false
  }

  const role = decodedToken["role"]
  if (!role) {
    return false
  }

  return role === requiredRole
}

export default hasAccess
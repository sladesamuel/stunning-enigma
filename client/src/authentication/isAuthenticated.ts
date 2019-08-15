import { getAuthToken } from "./getAuthToken"

export const isAuthenticated = (): boolean => !!getAuthToken()

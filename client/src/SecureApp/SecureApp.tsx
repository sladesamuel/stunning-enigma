import React, { memo } from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { App } from "../App"
import { Login } from "../modules/security/Login"

const IS_LOGGED_IN = gql`
  query {
    isLoggedIn @client
  }
`

interface LoginState {
  isLoggedIn: boolean
}

const SecureApp = () => {
  const { data } = useQuery<LoginState>(IS_LOGGED_IN)

  return !!data && data.isLoggedIn ? <App /> : <Login />
}

export default memo(SecureApp)

import React, { memo } from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { AppContainer } from "../components"
import { App } from "../App"
import { Login } from "../pages"

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

  return (
    <AppContainer>
      {(data && data.isLoggedIn) ? <App /> : <Login />}
    </AppContainer>
  )
}

export default memo(SecureApp)

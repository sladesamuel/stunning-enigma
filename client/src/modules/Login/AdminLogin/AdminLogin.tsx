import React, { memo } from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { LoginForm, Loading, Error } from "../../../components"

const ADMIN_LOGIN = gql`
  mutation adminLogin($username: String!, $password: String!) {
    adminLogin(username: $username, password: $password) {
      authToken
      errorDescription
    }
  }
`

interface AdminLoginProps {
  onLoginSuccess: (authToken: string) => void
}

const AdminLogin = ({ onLoginSuccess }: AdminLoginProps) => {

  const [adminLogin, result] = useMutation(
    ADMIN_LOGIN,
    {
      onCompleted(data) {
        if (!!data.adminLogin.authToken) {
          onLoginSuccess(data.adminLogin.authToken)
        }
      }
    }
  )

  const loginError =
    (!!result.error && result.error.message)
      || (!!result.data && !!result.data.adminLogin && result.data.adminLogin.errorDescription)

  return (
    <>
      {result.loading && <Loading />}
      {!!loginError && <Error error={loginError} />}

      <LoginForm
        onLogin={(username, password) => adminLogin({
          variables: {
            username,
            password
          }
        })}
      />
    </>
  )
}

export default memo(AdminLogin)

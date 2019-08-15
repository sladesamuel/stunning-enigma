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

  const [adminLogin, adminLoginResult] = useMutation(
    ADMIN_LOGIN,
    {
      onCompleted(data) {
        if (!!data.adminLogin.authToken) {
          onLoginSuccess(data.adminLogin.authToken)
        }
      }
    }
  )

  const adminLoginError =
    (!!adminLoginResult.error && adminLoginResult.error.message)
      || (!!adminLoginResult.data && !!adminLoginResult.data.adminLogin && adminLoginResult.data.adminLogin.errorDescription)

  return (
    <>
      {adminLoginResult.loading && <Loading />}
      {!!adminLoginError && <Error error={adminLoginError} />}

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

import React, { memo } from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Loading, Error } from "../../../components"
import { EnterAccessKey } from "../EnterAccessKey"

const ACCESS_KEY_LOGIN = gql`
  mutation accessKeyLogin($accessKey: String!) {
    login(accessKey: $accessKey) {
      authToken
      errorDescription
    }
  }
`

interface AccessKeyLoginProps {
  onLoginSuccess: (authToken: string) => void
}

const AccessKeyLogin = ({ onLoginSuccess }: AccessKeyLoginProps) => {

  const [login, result] = useMutation(
    ACCESS_KEY_LOGIN,
    {
      onCompleted(data) {
        if (!!data.login.authToken) {
          onLoginSuccess(data.login.authToken)
        }
      }
    }
  )

  const loginError =
    (!!result.error && result.error.message)
      || (!!result.data && !!result.data.login && result.data.login.errorDescription)

  return (
    <>
      {result.loading && <Loading />}
      {!!loginError && <Error error={loginError} />}

      <EnterAccessKey
        onSubmit={accessKey => login({
          variables: {
            accessKey
          }
        })}
      />
    </>
  )
}

export default memo(AccessKeyLogin)

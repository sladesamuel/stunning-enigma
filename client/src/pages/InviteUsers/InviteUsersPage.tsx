import React, { memo } from "react"
import { Redirect } from "react-router-dom"
import { useMutation } from "@apollo/react-hooks"
import { TextField, Typography, Button } from "@material-ui/core"
import gql from "graphql-tag"
import { Loading, Error } from "../../components";

const CREATE_USER_INVITE = gql`
  mutation createUserInvite($email: String!) {
    createUserInvite(email: $email) {
      reference
    }
  }
`

interface InviteModel {
  email?: string
}

const InviteUsersPage = () => {
  const [complete, setComplete] = React.useState(false)
  const [model, setModel] = React.useState<InviteModel>({})

  const [createUserInvite, result] = useMutation(
    CREATE_USER_INVITE,
    { onCompleted: () => setComplete(true) }
  )

  const handleFieldChange = name => event =>
    setModel({ ...model, [name]: event.target.value })

  const canSave = (): boolean => !!model.email

  const save = (e: any) => {
    e.preventDefault()

    if (!canSave()) {
      return
    }

    createUserInvite({
      variables: {
        ...model
      }
    })
  }

  return (
    <>
      {complete && <Redirect to="/" />}
      {result.loading && <Loading />}
      {!!result.error && <Error error={result.error.message} />}

      <form onSubmit={e => save(e)}>
        <Typography variant="h1">
          Invite a User
        </Typography>

        <Typography variant="body1">
          Enter the details below to invite a user to make a prediction on the birth of the child
        </Typography>

        <TextField
          type="Email"
          label="Email"
          value={model.email}
          onChange={handleFieldChange("email")}
          disabled={result.loading}
          autoFocus
          fullWidth
        />

        <div style={{ textAlign: "right" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={e => save(e)}
            disabled={result.loading || !canSave()}
          >
            Send Invite
          </Button>
        </div>
      </form>
    </>
  )
}

export default memo(InviteUsersPage)

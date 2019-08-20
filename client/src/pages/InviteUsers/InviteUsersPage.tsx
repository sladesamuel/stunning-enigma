import React, { memo } from "react"
import { TextField, Typography, Button } from "@material-ui/core"

interface InviteModel {
  email?: string
}

const InviteUsersPage = () => {
  const [model, setModel] = React.useState<InviteModel>({})

  const handleFieldChange = name => event =>
    setModel({ ...model, [name]: event.target.value })

  return (
    <form>
      <Typography variant="h1">
        Invite a User
      </Typography>

      <Typography variant="body1">
        Enter the details below to invite a user to make a prediction on the birth of the child
      </Typography>

      <TextField
        label="Email"
        value={model.email}
        onChange={handleFieldChange("email")}
        autoFocus
        fullWidth
      />

      <div style={{ textAlign: "right" }}>
        <Button
          variant="outlined"
          color="primary"
        >
          Send Invite
        </Button>
      </div>
    </form>
  )
}

export default memo(InviteUsersPage)

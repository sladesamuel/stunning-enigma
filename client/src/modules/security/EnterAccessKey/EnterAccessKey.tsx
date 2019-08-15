import React, { memo } from "react"
import { Typography, TextField, Button, useTheme } from "@material-ui/core"

interface EnterAccessKeyProps {
  onSubmit: (accessKey: string) => void
}

const EnterAccessKey = ({ onSubmit }: EnterAccessKeyProps) => {
  const [accessKey, setAccessKey] = React.useState("")

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(accessKey)
      }}
    >
      <Typography paragraph>
        Please enter the Access Key you have been given in your invite to
        make your prediction
      </Typography>

      <TextField
        label="Access Key"
        value={accessKey}
        onChange={e => setAccessKey(e.target.value)}
        style={{ marginBottom: useTheme().spacing() }}
        fullWidth
        autoFocus
        required
      />

      <div style={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={e => {
            e.preventDefault()
            onSubmit(accessKey)
          }}
        >
          Gain Access
        </Button>
      </div>
    </form>
  )
}

export default memo(EnterAccessKey)

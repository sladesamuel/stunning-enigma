import React, { memo } from "react"
import {
  TextField, Button, Theme,
  createStyles, WithStyles, withStyles, Typography
} from "@material-ui/core"

const styles = (theme: Theme) => createStyles({
  field: {
    marginBottom: theme.spacing()
  }
})

interface LoginFormProps extends WithStyles<typeof styles> {
  onLogin: (username: string, password: string) => void
}

const LoginForm = ({ classes, onLogin }: LoginFormProps) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onLogin(username, password)
      }}
    >
      <Typography paragraph>
        In order to log into the system, you must be an Administrator and have Admin credentials
      </Typography>

      <TextField
        className={classes.field}
        type="text"
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        fullWidth
        required
      />

      <TextField
        className={classes.field}
        type="password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
        required
      />

      <div style={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={e => {
            e.preventDefault()
            onLogin(username, password)
          }}
        >
          Login
        </Button>
      </div>
    </form>
  )
}

export default memo(withStyles(styles)(LoginForm))

import React, { memo } from "react"
import SwipeableViews from "react-swipeable-views"
import {
  Paper, Tabs, Tab, Grid,
  Theme, createStyles, WithStyles, withStyles
} from "@material-ui/core"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import { EnterAccessKey, LoginForm } from "../../components"

const styles = (theme: Theme) => createStyles({
  paper: {
    maxWidth: 500
  },
  content: {
    padding: theme.spacing(4)
  }
})

const Login = ({ classes }: WithStyles<typeof styles>) => {
  const [tabIndex, setTabIndex] = React.useState(0)

  return (
    <Grid
      container
      justify="center"
    >
      <Grid item>
        <Paper square className={classes.paper}>
          <Tabs
            value={tabIndex}
            onChange={(_, newIndex) => setTabIndex(newIndex)}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="ENTER ACCESS KEY" icon={<VpnKeyIcon />} />
            <Tab label="ADMIN LOGIN" icon={<LockOpenIcon />} />
          </Tabs>

          <SwipeableViews
            index={tabIndex}
            onChangeIndex={newIndex => setTabIndex(newIndex)}
          >
            <div className={classes.content}>
              <EnterAccessKey onSubmit={accessKey => alert(`TODO: Handle access key ${accessKey}`)} />
            </div>

            <div className={classes.content}>
              <LoginForm onLogin={(username, password) => alert(`TODO: Handle login: Username ${username}, Password ${password}`)} />
            </div>
          </SwipeableViews>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default memo(withStyles(styles)(Login))

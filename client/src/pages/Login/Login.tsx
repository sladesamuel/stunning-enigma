import React, { memo } from "react"
import { Redirect } from "react-router-dom"
import SwipeableViews from "react-swipeable-views"
import {
  Paper, Tabs, Tab, Grid,
  Theme, createStyles, WithStyles, withStyles
} from "@material-ui/core"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import { EnterAccessKey, LoginForm, PageTitle } from "../../components"

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
  const [loggedIn, setLoggedIn] = React.useState(false)

  const login = (key: string) => {
    localStorage.setItem("stunning-enigma-key", key)
    setLoggedIn(true)
  }

  return (
    <>
      {loggedIn && <Redirect to="/" />}

      <Grid
        container
        justify="center"
      >
        <Grid item>
          <PageTitle>
            Baby Predictions
          </PageTitle>

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
                <EnterAccessKey onSubmit={accessKey => login(accessKey)} />
              </div>

              <div className={classes.content}>
                <LoginForm onLogin={(username, password) => login(`${username}:${password}`)} />
              </div>
            </SwipeableViews>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default memo(withStyles(styles)(Login))

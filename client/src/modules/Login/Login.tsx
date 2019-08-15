import React, { memo } from "react"
import SwipeableViews from "react-swipeable-views"
import { useApolloClient } from "@apollo/react-hooks"
import {
  Paper, Tabs, Tab, Grid,
  Theme, createStyles, WithStyles, withStyles
} from "@material-ui/core"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import { EnterAccessKey, PageTitle } from "../../components"
import { storeAuthToken } from "../../authentication"
import { AdminLogin } from "./AdminLogin"

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

  const client = useApolloClient()

  const handleLoginSuccess = (authToken: string) => {
    storeAuthToken(authToken)

    client.writeData({
      data: {
        isLoggedIn: true
      }
    })
  }

  return (
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
              <EnterAccessKey onSubmit={accessKey => console.log(accessKey)} />
            </div>

            <div className={classes.content}>
              <AdminLogin onLoginSuccess={handleLoginSuccess} />
            </div>
          </SwipeableViews>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default memo(withStyles(styles)(Login))

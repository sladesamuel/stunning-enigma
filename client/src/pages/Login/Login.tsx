import React, { memo } from "react"
import SwipeableViews from "react-swipeable-views"
import { useMutation, useApolloClient } from "@apollo/react-hooks"
import gql from "graphql-tag"
import {
  Paper, Tabs, Tab, Grid,
  Theme, createStyles, WithStyles, withStyles
} from "@material-ui/core"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import { EnterAccessKey, LoginForm, PageTitle, Loading, Error } from "../../components"
import { storeAuthToken } from "../../authentication"

const ADMIN_LOGIN = gql`
  mutation adminLogin($username: String!, $password: String!) {
    adminLogin(username: $username, password: $password) {
      authToken
      errorDescription
    }
  }
`

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
  const [adminLogin, adminLoginResult] = useMutation(
    ADMIN_LOGIN,
    {
      onCompleted(data) {
        if (!!data.adminLogin.authToken) {
          storeAuthToken(data.adminLogin.authToken)

          client.writeData({
            data: {
              isLoggedIn: true
            }
          })
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
                <LoginForm
                  onLogin={(username, password) => adminLogin({
                    variables: {
                      username,
                      password
                    }
                  })}
                />
              </div>
            </SwipeableViews>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default memo(withStyles(styles)(Login))

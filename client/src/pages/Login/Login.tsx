import React, { memo } from "react"
import SwipeableViews from "react-swipeable-views"
import { Paper, Tabs, Tab } from "@material-ui/core"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import VpnKeyIcon from "@material-ui/icons/VpnKey"

const Login = () => {
  const [tabIndex, setTabIndex] = React.useState(0)

  return (
    <Paper square>
      <Tabs
        value={tabIndex}
        onChange={(_, newIndex) => setTabIndex(newIndex)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="ENTER ACCESS KEY" icon={<VpnKeyIcon />} />
        <Tab label="LOGIN" icon={<LockOpenIcon />} />
      </Tabs>

      <SwipeableViews index={tabIndex} onChangeIndex={newIndex => setTabIndex(newIndex)}>
        <div>Enter Access Key</div>
        <div>Login</div>
      </SwipeableViews>
    </Paper>
  )
}

export default memo(Login)

import React, { ReactNode, memo } from "react"
import { Theme, createStyles, WithStyles, withStyles } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  container: {
    backgroundColor: theme.palette.background.default,
    height: "100%"
  },
  content: {
    padding: 30,
  }
})

interface AppContainerProps extends WithStyles<typeof styles> {
  children: ReactNode
}

const AppContainer = ({ classes, children }: AppContainerProps) => (
  <div className={classes.container}>
    <div className={classes.content}>
      {children}
    </div>
  </div>
)

export default memo(withStyles(styles)(AppContainer))

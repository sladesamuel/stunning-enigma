import React, { memo } from "react"
import {
  Theme, createStyles, WithStyles,
  withStyles, Toolbar
} from "@material-ui/core"
import ErrorIcon from "@material-ui/icons/Error"

const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.error.main,
    marginBottom: theme.spacing(2),
    borderRadius: 3
  },
  icon: {
    color: theme.palette.common.white
  },
  text: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2)
  }
})

interface ErrorProps extends WithStyles<typeof styles> {
  error: string
}

const Error = ({ classes, error }: ErrorProps) => (
  <Toolbar className={classes.root}>
    <ErrorIcon className={classes.icon} />

    <div className={classes.text}>
      {error}
    </div>
  </Toolbar>
)

export default memo(withStyles(styles)(Error))

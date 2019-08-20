import React, { memo } from "react"
import { Link } from "react-router-dom"
import { createStyles, WithStyles, withStyles } from "@material-ui/core"

const styles = () => createStyles({
  link: {
    padding: 20,
    textDecoration: "none"
  }
})

interface LinkTabProps extends WithStyles<typeof styles> {
  label: string
  route: string
}

const LinkTab = ({ classes, label, route }: LinkTabProps) => (
  <Link className={classes.link} to={route}>
    {label}
  </Link>
)

export default memo(withStyles(styles)(LinkTab))

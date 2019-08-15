import React, { ReactNode, memo } from "react"
import { Typography } from "@material-ui/core"

interface PageTitleProps {
  children: ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => (
  <Typography
    color="primary"
    variant="h1"
    align="center"
    style={{ marginBottom: 20 }}
  >
    {children}
  </Typography>
)

export default memo(PageTitle)

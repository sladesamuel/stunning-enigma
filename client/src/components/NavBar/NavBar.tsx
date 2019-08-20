import React, { memo, ReactNode } from "react"
import { Toolbar, Paper, AppBar, Container } from "@material-ui/core"

interface NavBarProps {
  children: ReactNode
}

const NavBar = ({ children }: NavBarProps) => (
  <AppBar position="fixed" color="default">
    <Toolbar>
      <Container>
        {children}
      </Container>
    </Toolbar>
  </AppBar>
)

export default memo(NavBar)

import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from "@material-ui/core"
import { LinkTab, NavBar } from "../components"
import { Home, NotFound, InviteUsersPage } from "../pages"

const App = () => (
  <BrowserRouter>
    <Container>
      <NavBar>
        <LinkTab label="Home" route="/" />
        <LinkTab label="Invite" route="/invite" />
      </NavBar>

      <div style={{ marginTop: 80 }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/invite" exact component={InviteUsersPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Container>
  </BrowserRouter>
)

export default App

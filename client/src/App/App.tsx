import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import { Home, Login, NotFound } from "../pages"
import { isAuthenticated } from "../authentication";

const App = () => (
  <BrowserRouter>
    {!isAuthenticated() && <Redirect to="/login" />}

    <Switch>
      <Route path="/" exact component={Home} />,
      <Route path="/login" exact component={Login} />,
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

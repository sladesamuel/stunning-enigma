import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/styles"
import AppTheme from "../theme"
import { Home, Login, NotFound } from "../pages"
import { isAuthenticated } from "../authentication"

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <BrowserRouter>
      {!isAuthenticated() && <Redirect to="/login" />}

      <Switch>
        <Route path="/" exact component={Home} />,
        <Route path="/login" exact component={Login} />,
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default App

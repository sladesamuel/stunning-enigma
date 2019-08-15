import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/styles"
import AppTheme from "../theme"
import { isAuthenticated } from "../authentication"
import { AppContainer } from "../components"
import { Home, Login, NotFound } from "../pages"

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <AppContainer>
      <BrowserRouter>
        {!isAuthenticated() && <Redirect to="/login" />}

        <Switch>
          <Route path="/" exact component={Home} />,
        <Route path="/login" exact component={Login} />,
        <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  </ThemeProvider>
)

export default App

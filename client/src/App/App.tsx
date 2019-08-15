import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home, NotFound } from "../pages"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />,
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

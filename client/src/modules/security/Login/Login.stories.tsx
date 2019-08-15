import React from "react"
import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"
import AppTheme from "../../../theme"
import Login from "./Login"

storiesOf("pages/Login", module)
  .addDecorator(muiTheme(AppTheme))
  .add("default", () => (
    <Login />
  ))

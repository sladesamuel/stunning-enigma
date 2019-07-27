import React from "react"
import { storiesOf } from "@storybook/react"
import Login from "./Login"

storiesOf("pages/Login", module)
  .add("default", () => (
    <Login />
  ))
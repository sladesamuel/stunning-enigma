import React from "react"
import { storiesOf } from "@storybook/react"
import LoginForm from "./LoginForm"

storiesOf("components/LoginForm", module)
  .add("default", () => (
    <LoginForm />
  ))

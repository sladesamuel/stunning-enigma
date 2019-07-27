import React from "react"
import { storiesOf } from "@storybook/react"
import EnterAccessKey from "./EnterAccessKey"

storiesOf("components/EnterAccessKey", module)
  .add("default", () => (
    <EnterAccessKey />
  ))

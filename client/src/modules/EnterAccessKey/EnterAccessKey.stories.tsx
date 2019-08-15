import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import EnterAccessKey from "./EnterAccessKey"

storiesOf("components/EnterAccessKey", module)
  .add("default", () => (
    <EnterAccessKey onSubmit={action("Submit")} />
  ))

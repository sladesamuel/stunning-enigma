import { configure } from "@storybook/react"

// Globbing approach to load stories taken from:
// https://storybook.js.org/docs/guides/guide-react/

const loadStories = () => {
  const request = require.context("../src", true, /\.stories\.tsx$/)
  request.keys().forEach(filename => request(filename))
}

configure(loadStories, module)
#!/usr/bin/env node

const bcrypt = require("bcrypt")

bcrypt.hash("Password1", 10, (error, result) => {
  if (error) {
    console.error(error)
  }
  else {
    console.log(result)
  }
})
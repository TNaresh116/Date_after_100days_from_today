const express = require('express')
const addDays = require('date-fns/addDays')
const app = express()
app.get('/', (request, response) => {
  const dateTime = new Date()
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100,
  )
  respond.send(
    `${result.getDate()}/${result.getMont() + 1}/${result.getFullYear()}`,
  )
})
module.exports = app

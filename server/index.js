const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const main = require('./routes/index')

app.use(cors())
app.use(express.json())

//разрешение cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/', main)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3001, () => {
  console.log('Server has been startet')
})

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(morgan())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


'use strict'

const httpStatus = require('http-status')

// hanlde not found error
exports.handleNotFound = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND)
  res.json({
    'error': 'Not found'
  })
  res.end()
}

// handle errors
exports.handleError = (err, req, res, next) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR)
  res.json({
    error: err.message
  })
  res.end()
}

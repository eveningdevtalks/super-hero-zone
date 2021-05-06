'use strict'

const httpStatus = require('http-status')

// handle not found error
exports.handleNotFound = (_req, res, _next) => {
  res.status(httpStatus.NOT_FOUND)
  res.json({
    'error': 'Not found'
  })
  res.end()
}

// handle errors
exports.handleError = (err, _req, res, _next) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR)
  res.json({
    error: err.message
  })
  res.end()
}

'use strict'

const express  = require('express')
const pullData = require('./pullCoordinapeData')
const router   = express.Router()

router.route('/pullCoordinapeData').get(pullData)

module.exports = router

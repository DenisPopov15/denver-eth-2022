'use strict'

const express = require('express')
const router  = express.Router()
const pullSourceCredData = require('./pullSourceCredData')

router.route('/pullSourceCredData').get(pullSourceCredData)

module.exports = router

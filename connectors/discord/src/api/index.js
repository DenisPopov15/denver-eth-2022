'use strict'

const express  = require('express')
const redirect = require('./redirect')
const callback = require('./callback')
const router   = express.Router()

router.route('/discordRedirect').get(redirect)
router.route('/discordCallback').get(callback)

module.exports = router

const express = require('express')
const router = express.Router()



router.use('/', require('./application.js'))

module.exports = router
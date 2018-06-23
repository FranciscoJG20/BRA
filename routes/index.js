const express = require('express')
const router = express.Router()



router.use('/', require('./application.js'))
router.use('/faq', require('./faq.js'))

module.exports = router
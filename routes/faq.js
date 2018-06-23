const express = require('express')
const router = express.Router()
const faqController = require('../controllers/faq')

router.get('/', faqController.index)

module.exports = router

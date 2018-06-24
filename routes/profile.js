const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')

router.get('/', profileController.index)

module.exports = router
const express = require('express')
const router = express.Router()
const formController = require('../controllers/form')

router.get('/', formController.form)
router.get('/', formController.createForm)

module.exports = router

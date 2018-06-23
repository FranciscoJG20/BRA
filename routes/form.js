const express = require('express')
const router = express.Router()
const formController = require('../controllers/form')

router.get('/form', formController.form)
router.get('/form', formController.createForm)

module.exports = router

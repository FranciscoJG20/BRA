const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')


//Login
router.get('/login', userController.login)
router.post('/login', userController.createLogin)

//Singup
router.get('/signup', userController.signUp)
router.post('/signup', userController.createSignUp)

//Logout
router.get('/logout', userController.logout)

router.get('/secret', userController.secret)

module.exports = router
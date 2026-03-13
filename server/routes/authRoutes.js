const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { login, signup, getUser } = require('../controllers/authController')

router.get('/me', protect, getUser)
router.post('/signup', signup)
router.post('/login', login)

module.exports = router

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const signup = async (request, response) => {
  try {
    const { username, email, password, roles } = request.body
    if (!username || !email || !password)
      return response
        .status(400)
        .json({ message: 'All fields must be filled!' })
    if (password.length < 8)
      return response
        .status(400)
        .json({ message: 'Password must be at least 8 characters long!' })
    const userExists = await User.findOne({
      contactInformation: { email: email },
    })
    if (userExists)
      return response.status(400).json({ message: 'Error while creating user' })
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await User.create({
      username,
      contactInformation: { email },
      hashedPassword,
      roles,
    })
    if (user)
      return response
        .status(201)
        .json({ message: 'User created successfully', user: user.toJSON() })
    else
      return response
        .status(400)
        .json({ message: 'Error occurred while creating user' })
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'An error occurred' })
  }
}

const login = async (request, response) => {
  try {
    const { email, password } = request.body
    if (!email || !password)
      return response.status(400).json({ message: 'All fields are required' })
    const user = await User.findOne({ contactInformation: { email } })
    if (!user)
      return response
        .status(400)
        .json({ message: 'Invalid username or password' })
    const correctPassword = await user.matchPassword(password)
    if (correctPassword) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      })
      return response.status(200).json({
        message: 'Login successful',
        token,
        user: user.toJSON(),
      })
    } else
      return response
        .status(400)
        .json({ message: 'Invalid username or password' })
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'An error occurred' })
  }
}

const forgotPassword = async (request, response) => {}

const updatePassword = async (request, response) => {}

const getUser = async (request, response) => {
  try {
    const user = await User.findById(request.user._id)
    if (user) return response.status(200).json(user.toJSON())
    else return response.status(400).json({ message: 'User not found' })
  } catch (error) {
    return response.status(500).json({ message: 'An error occurred' })
  }
}

module.exports = { login, signup, getUser }

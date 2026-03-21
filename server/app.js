const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const corsOptions = {
  origin: [process.env.CLIENT_URL, 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

const connectDB = require('./config/db')
connectDB()

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' })
})
app.use('/api/auth', require('./routes/authRoutes'))

module.exports = app

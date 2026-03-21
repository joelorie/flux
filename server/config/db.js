const Mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const localDB =
  process.env.ENVIRONMENT === 'development'
    ? process.env.MONGO_LOCAL_URL
    : process.env.MONGO_REMOTE_URL

const connectDB = async () => {
  if (process.env.NODE_ENV === 'test') {
    return
  }

  try {
    await Mongoose.connect(localDB, {})
    console.log('DB connected')
  } catch (err) {
    console.error('DB connection error:', err)
  }
}

module.exports = connectDB

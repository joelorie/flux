const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  roles: {
    type: [String],
    enum: ['buyer', 'seller', 'admin'],
    default: ['buyer'],
  },
  contactInformation: {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

userSchema.methods.toJSON = function () {
  const user = this.toObject()
  user.id = user._id
  delete user._id
  delete user.hashedPassword
  delete user.__v
  return user
}

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.hashedPassword)
}

module.exports = mongoose.model('User', userSchema)

const User = require('../models/userModel')

const checkIdExists = async (id) => {
  const user = await User.findById(id)
  return user
}

module.exports = { checkIdExists }

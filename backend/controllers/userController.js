const asyncHandler = require('express-async-handler');

// @desc REGISTER a new user
// @route /api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validations
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include credentials!');
  }

  res.send('Register Route');
});

// @desc LOGIN a user
// @route /api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = { registerUser, loginUser };

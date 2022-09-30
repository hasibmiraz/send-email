const User = require('../models/users.schema.js');

exports.sendEmail = async (req, res) => {
  const { userID, email, mobileNo } = req.body;

  // const newUser = new User({ userID, email, mobileNo });

  return res.status(201).send({ success: true, userID, email, mobileNo });
};

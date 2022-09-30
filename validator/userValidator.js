const { check, validationResult } = require('express-validator');

exports.userValidator = [
  check('userID').trim().not().isEmpty().withMessage('userID is missing!'),
  check('email').normalizeEmail().isEmail().withMessage('Email is invalid!'),
  check('mobileNo')
    .trim()
    .not()
    .isEmpty()
    .withMessage('mobileNo is missing!')
    .isLength({ min: 10, max: 10 })
    .withMessage('Please enter a valid 10 digit phone number!'),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }
  next();
};

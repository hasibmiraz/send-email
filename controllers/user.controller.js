const User = require('../models/users.schema.js');
const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { userID, email, mobileNo } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'send.email202209@gmail.com',
      pass: 'send.email',
    },
  });

  const details = await transporter.sendMail({
    from: 'apiassignment@snellcart.com',
    to: email,
    subject: 'Verify your email',
    html: '<b>Hello world?</b>',
  });

  transporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent');
    }
  });
  return res.status(201).send({ success: true, userID, email, mobileNo });
};

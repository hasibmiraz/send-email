const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { userID, email, mobileNo } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'send.email202209@gmail.com',
      pass: 'zjjmeaxomtdmyjqf',
    },
  });

  await transporter.sendMail({
    from: 'apiassignment@snellcart.com',
    to: email,
    subject: 'Verify your email',
    html: '<b>Hello world?</b>',
  });

  return res.status(201).send({ success: true, userID, email, mobileNo });
};

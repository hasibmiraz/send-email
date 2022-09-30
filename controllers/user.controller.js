const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

exports.sendEmail = (req, res) => {
  const { userID, email, mobileNo } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  transporter.use(
    'compile',
    hbs({
      viewEngine: {
        extname: '.handlebars',
        partialsDir: path.resolve('./views'),
        defaultLayout: false,
      },
      viewPath: path.resolve('./views'),
      extName: '.handlebars',
    })
  );

  transporter.sendMail({
    from: 'apiassignment@snellcart.com',
    to: email,
    subject: 'Verify your email',
    template: 'index',
    context: {
      email,
    },
  });

  return res
    .status(201)
    .send({ success: true, message: 'Email sent successfullly!' });
};

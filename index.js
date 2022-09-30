// Dependencies
const express = require('express');
require('dotenv').config();
const userRouter = require('./routes/user.route');
const { errorHandler } = require('./utils/errorHandler');

const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/user', userRouter);
app.use('*', errorHandler);

app.listen(PORT, console.log(`Listening to port ${PORT}`));

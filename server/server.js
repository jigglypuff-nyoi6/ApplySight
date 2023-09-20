const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const authRouter = require('./routers/authRouter');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

const PORT = 3000;
// Serve the files on port 3000.
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});

app.use('/register', authRouter);
app.use('/login', authRouter);

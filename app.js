// server.js
require('babel-register');
require('ignore-styles');
const express = require('express');
const serverMiddleware = require('./src/server').default;
const cookiesMiddleware = require('universal-cookie-express');
 
const app = express();
const port = process.env.PORT || 8080
 
app
  // .use('/assets', express.static('dist'))
  .use(cookiesMiddleware())
  .use(serverMiddleware);
 
app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}...`)
});

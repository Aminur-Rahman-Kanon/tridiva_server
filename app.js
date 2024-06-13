const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));
const serviceRoute = require('./routes/serviceHandler/serviceHandler');

//handling local routes
app.use('/service', serviceRoute);



//initiating server instance
app.listen('8080', (e) => {
  if (e){
    throw new Error(e);
  }
  console.log('server is running on port 8080');
})

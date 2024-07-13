const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: ['https://tridivait.co.uk', 'http://localhost:3000', 'https://tridiva-client.onrender.com'] }));
const serviceRoute = require('./routes/serviceHandler/serviceHandler');
const { cronJob } = require('./utilities/utilities');

//handling local routes
app.use('/service', serviceRoute);

//initiating server instance
app.listen(process.env.PORT || '8080', (err) => {
    if (err) {
        console.log(err);
    }
    cronJob();
    console.log('server is listening to port 8080');
});

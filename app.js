const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://tridiva-client.onrender.com'] }));
const serviceRoute = require('./routes/serviceHandler/serviceHandler');

//handling local routes
app.use('/service', serviceRoute);



//initiating server instance
app.listen(process.env.PORT || '8080', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server is listening to port 8080');
});

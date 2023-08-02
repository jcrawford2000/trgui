/*
    Use Express as a web server to host the API
    Uses cors to allow Express to deal with cors
    Set the port to 5050, or whatever is in the environment variable PORT
*/

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5050;
/*
    Pull in our connect to DB function from ./config/db.json
    Pull in our route function from ./routes/api/books
*/
const connectDB = require('./config/db');
const settings = require('./routes/api/settings');

// Our main express app
const app = express();

// Connect to the Database
connectDB();

/*
    Tell Express to use cors
    Tell express to use json - allows Express to read json data sent using a POST or PUT request
*/
app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));

/*
    Default response for a get to / is our Hello World message
    Assign a route handler for requests to /api/settings
*/
app.get('/', (req, res) => { res.send('Hello World')});
app.use('/api/settings', settings);

// Now that we have everything setup, start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
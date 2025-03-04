/*
    Use Express as a web server to host the API
    Uses cors to allow Express to deal with cors
    Set the port to 5050, or whatever is in the environment variable PORT
*/

const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
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
//TODO: Replace Hello World with 404 - nothing should be at the root
app.get('/', (req, res) => { res.send('Hello World')});
app.use('/api/settings', settings);

// Now that we have everything setup, start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));


// Create a WebSocket Server
console.log('Starting WebSocket');
const wss = new WebSocket.Server({ port: 8899, host: '0.0.0.0' });

const clients = new Set();
var systems = [];

//Listen for connection
wss.on('error', (a) => {
    console.log("WS Error");
});

wss.on("listening", (a) => {
    console.log("WSS Listening.");
});

wss.on('connection', (ws) => {
    console.log("Received Connection");
    //Add to clients Set
    clients.add(ws);

    //Handle Incoming Messages
    ws.on('message', (data, isBinary) => {
        const message = isBinary ? data: data.toString();
        const msgJson = JSON.parse(message);

        console.log(msgJson.type);
        if (msgJson.type=='systems')
        {
            console.log("Got new systems");
            systems = msgJson.systems;
        }
        if (msgJson.type=='getSystems')
        {
            var msg = {"type":"systems", "systems": systems}
            ws.send(JSON.stringify(msg), {binary: isBinary});
        }
        clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message, {binary: isBinary });
            }
        });
        
    });

});

console.log("Websocket Server Started.  Listening for incoming messages...");

/*

                    PRWC-J
freq        talkgroup     talkgrouptag    elapsed
769.86875   1795         K1 PHX Alarm    16

{systemActivity:{
    "PRWC-J":{
        "769.86875":{
            "talkgroup":"1795",
            "talkgrouptag": "K1 PHX Alarm",
            "elapsed": 16
        }
    }
}}

*/

file: `index.html`
```
<!DOCTYPE html>
<html>
<head>
    <title>Socket.io Events Example</title>
    <!-- Include the Socket.io library -->
    <script src="/socket.io/socket.io.js"></script>
</head>
<body>
    <h1>Socket.io Events Example</h1>
    
    <!-- Display area for receiving messages -->
    <div id="messageArea"></div>
    
    <script>
        // Connect to the Socket.io server
        const socket = io();

        // ------------------ Receiver (Server) ------------------

        // Handling the default 'message' event from the server
        socket.on('message', function(message) {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = 'Received default message: ' + message;
            document.getElementById('messageArea').appendChild(messageDiv);
        });

        // Handling the custom 'testerEvent' event from the server
        socket.on('testerEvent', function(data) {
            const customEventDiv = document.createElement('div');
            customEventDiv.textContent = 'Received custom event: ' + data.description;
            document.getElementById('messageArea').appendChild(customEventDiv);
        });

        // ------------------ Sender (Client) ------------------

        // Sending a custom event 'clientEvent' to the server
        const eventData = { message: 'Hello from the client!' };
        socket.emit('clientEvent', eventData);
    </script>
</body>
</html>
```
Important Notes:

* The HTML file serves as both the sender (client) and receiver (server) parts of the Socket.io interaction.
* The <script> section contains two main parts:
* Receiver (Server): This part listens for events sent from the server and displays the received messages in the messageArea div.
* Sender (Client): This part sends a custom event named 'clientEvent' to the server with some data.

file: `app.js`
```
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'src/index.html'));
});

io.on('connection', function(socket){
    console.log('A user connected');

    // Handling the default 'message' event from the sender
    socket.on('message', function(message) {
        console.log('Received default message from sender:', message);
    });

    // Handling the custom 'clientEvent' event from the sender
    socket.on('clientEvent', function(data){
        console.log('Received custom event from sender:', data.message);
    });

    // Whenever someone disconnects, this code gets executed
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
});

http.listen(3000, function(){
   console.log('listening on *:3000');
});

```
Important Notes:

* index.html is a simple HTML file that includes the Socket.io library and sends a custom event named 'clientEvent' to the server.
* receiver.js is a server-side script that handles the received events from the sender, including the default 'message' event and the custom 'clientEvent' event.
* Make sure to adjust paths and integration according to your project structure.

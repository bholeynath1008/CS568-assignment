```

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'src/index.html'));
});

io.on('connection', (socket) => {
    console.log('user is connected');
    
    // Handle messages from client to server
    socket.on('clientMessage', (data) => {
        console.log('Message from client:', data.message);
        // Emit a server message back to the client
        socket.emit('serverMessage', { message: 'Message received on the server!' });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

```

HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket IO</title>
</head>
<body>
    <h1>Get Response from the server</h1>

    <!-- Include the Socket.io library -->
    <script src="/socket.io/socket.io.js"></script>
    <script>
        // Connect to the server
        const socket = io();

        // Add an event listener to handle a custom event from the server
        socket.on('serverMessage', (data) => {
            // Display the message received from the server
            const messageElement = document.createElement('p');
            messageElement.textContent = data.message;
            document.body.appendChild(messageElement);
        });

        // Example: Sending a message to the server
        const messageToSend = "Hello, Server!";
        socket.emit('clientMessage', { message: messageToSend });
    </script>
</body>
</html>

```


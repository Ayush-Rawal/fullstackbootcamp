const express = require('express');

const app = express();

const http = require('http').Server(app);

const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function() {
    res.send('Hi!')
});


io.on('connection', function(socket) {
    console.log('A user connected');
    //  To send to yourself
    socket.on('chatmsg', function(msg) {
        console.log(`Message: ${msg}`)
        socket.broadcast.emit('chatsend', msg);
    });
});

http.listen(8080, function() {
    console.log('Server started');
});
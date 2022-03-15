const express = require('express');
const app = express();
const videoRoutes = require('./routes/video')

const http = require('http').Server(app);

const io = require('socket.io')(http);

app.use('/', videoRoutes)


app.use(express.static(__dirname + "/public"))

io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        //enviar evento a todos sockets conectados
        socket.broadcast.emit('stream', image)
    })
})

module.exports = http
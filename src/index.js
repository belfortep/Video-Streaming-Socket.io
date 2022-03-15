const http = require('./app');
const express = require('express');
const app = express();
const videoRoutes = require('./routes/video')

app.use('/', videoRoutes)

app.use(express.static(__dirname + "/public"))


http.listen(3000, () => {
    console.log('server on port 3000')
})
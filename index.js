'use strict'

const path = require('path'), 
    app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000,
    publicDir = path.join(__dirname, './public')
    
app.get('/', (req,res)=>{
    res.sendFile(`${publicDir}/client.html`)
})
    
app.get('/stream', (req,res)=>{
    res.sendFile(`${publicDir}/server.html`)
})




http.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})

// console.log(io)

io.on('connection', socket=>{
    console.log('new user connected')
})
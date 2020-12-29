const express = require('express');
// Inicializar servidor con express
const app = express();
const server = require('http').Server(app);
// Se inicializa socket.io en el servidor
const io = require('socket.io')(server);

app.use(express.static('public'));
// Preparar conexiones
io.on('connection', function (socket) {
    console.log('Nuevo cliente conectado.');
    socket.emit('mensaje', 'Bienvenido');
});

setInterval(() => {
    io.emit('mensaje', 'Hola, le escribo a todos');
}, 3000);

// asignacion del puerto
server.listen(8080, function () {
    console.log('Servidor iniciado en http://localhost:8080');
});

//vamos a usar el HTTP para montar un webServer
//no hace falta hacer npm install http ya que es un módulo que viene por defecto en el propio node


const http = require('http');
//primero creamos el servidor el cual recibe un callback; cuando se crea el servidor invoca a la función callback
//con la request y respuesta.
//cuando creamos el servidor debemos especificar el puerto por donde vamos a escuchar, por defecto 8080


/* http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application-json' });
    let salida = {
            nombre: 'felipe',
            edad: 44,
            url: req.url
        }
        //convertimos el objeto salida a JSON
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080) */


const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(8080)



console.log('Escuchando en puerto 8080');
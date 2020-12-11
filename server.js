const express = require('express');
//esto nos permite usar express como deseamos
const app = express();

const hbs = require('hbs');

//cuando lo subamos a heroku no sabemos el puerto en el qué va a correr
//por lo tanto lo que hacemos es cuando esté corriendo obtenemos el puerto que heroku le ha asignado y si corre en local le 
//asignamos el 3000


const port = process.env.PORT || 3000;

//de esta forma permitimos que express sirva contenido estático
//si no pusiera esta línea el navegador no podría acceder a ese area de contenido estático (.css, imagenes, etc.)

/* Para utilizar varios directorios de activos estáticos, invoque la función de middleware express.static varias veces:


app.use(express.static('public'));
app.use(express.static('files')); */

app.use(express.static(__dirname + '/public'));

//ponemos el directorio donde se van a almacenar los parciales(bloques de código html)
hbs.registerPartials(__dirname + '/views/partials');

//le dice a express que use este motor de renderizado de vistas --> HBS
app.set('view engine', 'hbs');

hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
});

//aquí estamos diciendo que TODAS las peticiones que lleguen a /saludo ejecutarán la función o callback
app.get('/', function(req, res) {

    /*   let salida = {
              nombre: 'felipe',
              edad: 44,
              url: req.url
          }
          //convertimos el objeto salida a JSON
          //convertimos el objeto salida a JSON
          //res.write(JSON.stringify(salida));
          //con express no hace falta convertir a JSON. Lo convierte automáticamente

      res.send(salida); */


    //le decimos a express que renderize el archivo home.hbs
    //en el fichero .hbs se han usado las variables nombre y anyo.
    res.render('home.hbs', {
        nombre: 'Paolo',
        anyo: new Date().getFullYear() - 2
    });



    //res.send('Hola mundo')
})


app.get('/about', function(req, res) {

    res.render('about.hbs');
});


app.listen(port, () => {
    console.log(`***Escuchando peticiones en el puerto ${ port} +++****`);
});
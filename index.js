//esto es un formato q se repite en todos
var express = require('express');
var exphbs= require('express-handlebars');

var app = express();
app.use(express.static('public'));

var fs = require ('fs');


app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//aqui se empiezan a configurar las rutas

app.get('/', function(request, response){   
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'pagina principal'

    }
    response.render('home', contexto);
});

app.post('/login', function(request,response){
    console.log(request.body);
    fs.writeFile('info.txt','Datos: '+ 'correo: '+ request.body.correo+ ' ' + 'contrasena: '+request.body.contrasena , 'utf8',function(){
        console.log('archivo escrito');
        });

    response.redirect('/bienvenida');
});


//aqui se le dice el puerto y las rutas
app.listen(3000);
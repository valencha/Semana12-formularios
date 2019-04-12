var express= require('express');
var exphbs= require('express-handlebars');


var app= express();
app.use(express.static('public'));

app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');


app.get('/', function(request, response){
    var contexto= {
    titulo : 'pagina',
    };
    response.render('home',contexto);
});

app.listen(3000);
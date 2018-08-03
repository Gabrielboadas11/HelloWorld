var express=require('express'),
app = express(),
server = require('http').Server(app),
port = process.env.port || 5000;

app.set('views',__dirname + '/views');
app.set('view engine','ejs')

app.get('/',function(req,res){
res.render('index');
});

// CORS Middleware
app.use(function (req, res, next) {
   //Enabling CORS 
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
   next();
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port,server_host,function(){
console.log('Servicio Inicializado en el Puerto %d',server_port);
});

var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>Express Inicio</h1>')
}

function c_clientes(req,res){
    res.send('<h1>Clientes</h1><ul><li>Luis Valdivia</li><li>Jaime Farfan</li><li>Jaime Gomez</li></ul>')
}
function c_productos(req,res){
    res.send('<h1>Productos</h1><ul><li>RAM Crucial Ballistick 8GB</li><li>SSD WD 500GB</li><li>CASE Halion</li></ul>')

}

function c_server(req,res){
    console.log('port:5000');
}

var server = app.listen(5000,c_server);
//-- Cargar las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');
const fs = require('fs');

const PUERTO = 9000;

//-- Crear una nueva aplciacion web
const app = express();

//-- Crear un servidor, asociado a la App de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const io = socket(server);

//-- Nombre del fichero JSON a escribir
const FICHERO_JSON_OUT = "ids.json"

//-- Constante para la fecha
const tiempo = Date.now();
let fecha = "";

var h = "";
var m = "";

//--Numero de usuarios
let numUsuarios = 0;

//--Array identificadores
let identificadores = [];

//--Color letras
let colorLetras = "";
let posUser = "";

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Definir el punto de entrada principal de mi aplicación web

app.get('/', (req, res) => {
    res.send('<p style = "text-align: center; margin-top: 20%;">¡Bienvenid@! </p>' + '<p style = "text-align: center; vertical-align: middle;"><a href="/chat.html">Entrar al chat</a></p>');
  });

//-- Esto es necesario para que el servidor le envíe al cliente la
//-- biblioteca socket.io para el cliente
app.use('/', express.static(__dirname +'/'));

//-- El directorio publico contiene ficheros estáticos
app.use(express.static('public'));

//GESTION SOCKETS IO
//-- Evento: Nueva conexion recibida
io.on('connect', (socket) => {

    colorLetras = "";
    posUser = "";

    var letters = '0123456789ABCD';
    var randomColor = '#';

    for (var i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
      }
    //--From http://stackoverflow.com/a/5365036/2065702
    randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

    fecha = new Date(tiempo);
    console.log('** NUEVA CONEXIÓN **'.yellow);

    //-- Usuario conectado. Imprimir el identificador de su socket
    console.log('Socket id: ' + socket.id);
});

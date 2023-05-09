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
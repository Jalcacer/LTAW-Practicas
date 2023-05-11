// llamamos a electron 
const electron = require('electron');

console.log("Cargando aplicación..");

//-- Obtener elementos de la interfaz
const display = document.getElementById("display");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const info5 = document.getElementById("info5");
const info6 = document.getElementById("info6");
const info7 = document.getElementById("info7");
const infoIP = document.getElementById("infoIP");
const accesoChat = document.getElementById("accesoChat");
const infoUSERS = document.getElementById("infoUSERS");
const print = document.getElementById("print");
//mensaje de prueba 
let msg_prueba = 1;
infoUSERS.innerHTML = "0";

//-- Acceder a la API de node para obtener la info
//-- Sólo es posible si nos han dado permisos desde
//-- el proceso princpal
info1.textContent = process.versions.node;
info2.textContent = process.versions.electron;
info3.textContent = process.versions.chrome;
info4.textContent = process.arch;
info5.textContent = process.platform;
info6.textContent = process.getSystemVersion();
info7.textContent = process.type;
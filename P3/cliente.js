//-- Elementos del interfaz
const display = document.getElementById("display");
const mensajesRecibidos = document.getElementById("mensajesRecibidos");
const msg_entry = document.getElementById("msg_entry");
const sendUser = document.getElementById("sendUser");
const botonEnviar = document.getElementById("botonEnviar");
const user_entry = document.getElementById("user_entry");

//-- Crear un websocket. Se establece la conexión con el servidor
const socket = io();


socket.on("message", (msg)=>{
  
    if(msg.includes("Usuarios chat:")){
      mensajesRecibidos.innerHTML =  "</p>" + msg.split("////")[0];
    }else{
      display.innerHTML +=  "</p>" + msg.split("////")[0];
    }
  });
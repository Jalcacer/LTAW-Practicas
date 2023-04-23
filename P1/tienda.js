//--Para poder tener un servidor debemos importar el modulo de http
const http = require('http');

//--Importamos el módulo fs
const fs = require('fs');

//--Importamos el modulo pathh
const path = require('path');

//elegimos el puerto desde el que el servidor va a escuchar (se pide el 9000)
const PORT = 9000;


//-- Ahora si comenzamos con el server 
const server = http.createServer((req, res) {
let myurl = new URL (req.url, "http://" + req.headers["host"]);
let path = "";
if(myurl.pathname == "/"){
    path += "/tienda.html";
}else{
    path = myurl.pathname;
}

file_extension = path.split(".")[1];
path = "." + path;
const type = {
  "plain": "text/plain",
  "html": "text/html",
  "css": "text/css",
  "jpg": "image/jpg",
  "png": "image/png",
};

let mime = type[file_extension];
fs.readFile(path, function (err, data) {
        if(err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          console.log("404 Not Found");
          path = "front-end/error404.html";
          data = fs.readFileSync(path);
        }else {
          res.writeHead(200, {'Content-Type': mime});
          console.log("Recurso recibido: " + mime);
          console.log("200 OK")
        }
        res.write(data);
        res.end();
      });
    });  

server.listen(PORT);
console.log("Server escuchando en puerto: " +PORT+"...");


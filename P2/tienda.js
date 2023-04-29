

//--Para poder tener un servidor debemos importar el modulo de http
const http = require('http');

//--Importamos el módulo fs
const fs = require('fs');


//elegimos el puerto desde el que el servidor va a escuchar (se pide el 9000)
const PORT = 9000;

//-- Nombre del fichero JSON a leer
const FICHERO_JSON = "json/BDD.json"

//-- Nombre del fichero JSON a escribir
const FICHERO_JSON_OUT = "json/info.json"


//-- Leer el fichero JSON
const tienda_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);

//--Pagina principal
const INDEX = fs.readFileSync('Tienda.html', 'utf-8');

//-- Página para finalizar compra
const COMPRA = fs.readFileSync('compra.html', 'utf-8');

//--Alcarro
const ALACESTA = fs.readFileSync('alacesta.html', 'utf-8');

//--Compra completada
const COMPRA_COMPLETADA = fs.readFileSync('compracompleta.html', 'utf-8');


//--Productos
const Horus = fs.readFileSync('Horus.html', 'utf-8');
const Abbadon = fs.readFileSync('Abbadon.html', 'utf-8');
const Lord = fs.readFileSync('Lord.html', 'utf-8');

//--Formulario
const FORMULARIO_LOGIN = fs.readFileSync('login.html','utf-8');

//-- Respuesta login
const RESPUESTA_LOGIN = fs.readFileSync('html/logueado.html','utf-8');


//-- Ahora si comenzamos con el server 

//-- Imprimo la info del server
function print_info_req(req) {

  console.log("");
  console.log("Mensaje de solicitud");
  console.log("====================");
  console.log("Método: " + req.method);
  console.log("Recurso: " + req.url);
  console.log("Version: " + req.httpVersion)
  console.log("Cabeceras: ");

  //-- Recorrer todas las cabeceras disponibles
  //-- imprimiendo su nombre y su valor
  for (hname in req.headers)
    console.log(`  * ${hname}: ${req.headers[hname]}`);

  //-- Construir el objeto url con la url de la solicitud
  const myURL = new URL(req.url, 'http://' + req.headers['host']);
  console.log("URL completa: " + myURL.href);
  console.log("  Ruta: " + myURL.pathname);
}


//-- Función del carrito de compra

function get_carrito(req) {
  //-- Leer la Cookie recibida
  const cookie = req.headers.cookie;

  if (cookie) {
    //-- Obtener un array con todos los pares nombre-valor
    let pares = cookie.split(";");

    //-- Variable para guardar el producto
    let carrito;

    //-- Recorrer todos los pares nombre-valor
    pares.forEach((element, index) => {
      //-- Obtener los nombre y los valores por separado
      let [nombre, valor] = element.split('=');

      //-- Leer el producto
      //-- Solo si el nombre es 'carrito'
      if (nombre.trim() === 'carrito') {
        carrito = valor;
        //res.setHeader('Set-Cookie', element + ':' + carrito);
      }
    });
    //-- Si la variable user no está asignada
    //-- se devuelve null
    return carrito || null;
  }
}

//--Función para obtener la información del usuario
function get_user(req) {  

  //-- Leer la Cookie recibida
  const cookie = req.headers.cookie;

  //-- Hay cookie
  if (cookie) {
    //-- Obtener un array con todos los pares nombre-valor
    let pares = cookie.split(";");
    
    //-- Variable para guardar el usuario
    let user;

    //-- Recorrer todos los pares nombre-valor
    pares.forEach((element, index) => {

      //-- Obtener los nombres y valores por separado
      let [nombre, valor] = element.split('=');

      //-- Leer el usuario
      //-- Solo si el nombre es 'user'
      if (nombre.trim() === 'user') {
        user = valor;
      }
    });
    
    //-- Si la variable user no está asignada
    //-- se devuelve null
    return user || null;

  }
}


//-- Función de los productos
function get_productos(carrear){
  let productosCarro = carrear.split(",");
  let tamaño = productosCarro.length;
  let tiposProd = ["Horus War Lord",0, "Abbadon the despoiler",0, "Lord Invocatus",0];
  for (let i = 0; i < tamaño; i++) {
      if(productosCarro[i].includes("Horus War Lord")){
        tiposProd[1] = tiposProd[1]+1;
      }else if(productosCarro[i].includes("Abbadon the despoiler")){
        tiposProd[3] = tiposProd[3]+1;
      }else if(productosCarro[i].includes("Lord Invocatus")){
        tiposProd[5] = tiposProd[5]+1;
      }
  }
  return tiposProd;
}


//-- Ahora si comenzamos con el server 
const server = http.createServer((req,res) =>{
console.log("Petición recibida!");


  //-- Valores de la respuesta por defecto
  let code = 200;
  let code_msg = "OK";

  //-- Construir el objeto url con la url de la solicitud
  const url = new URL(req.url, 'http://' + req.headers['host']);
  console.log("URL (del recurso solicitado): " + url.href)
  console.log("Ruta: ",url.pathname);
  
  let path = "";
  let mimetype = 'text/html';

  if (url.pathname == '/') {//-- Si se pide la pagina principal
    petition = "/Tienda.html"
  }else {//-- Si se pide cualquier otra cosa
      petition = url.pathname;
  }
  let info;

  //Logins
  let nombre_user = url.searchParams.get('usuario');
  let pass = url.searchParams.get('contraseña');
  let login1_BD = tienda[0]['usuarios'][0]['nick'];
  let pass1_BD = tienda[0]['usuarios'][0]['pass'];
  let login2_BD = tienda[0]['usuarios'][1]['nick'];
  let pass2_BD = tienda[0]['usuarios'][1]['pass'];

  //Horus
  let Horus_war = Horus;
  info = tienda[1]['productos'][0]['nombre'];
  golden_supreme = golden_supreme.replace("NOMBRE", info);
  info = tienda[1]['productos'][0]['descripcion'];
  golden_supreme = golden_supreme.replace("DESCRIPCION", info);
  info = tienda[1]['productos'][0]['precio'];
  golden_supreme = golden_supreme.replace("PRECIO", info);
  info = tienda[1]['productos'][0]['stock'];
  golden_supreme = golden_supreme.replace("STOCK", info);

  //Abbadon
  let Abbadon_despoiler = Abbadon;
  info = tienda[1]['productos'][1]['nombre'];
  granny_smith = granny_smith.replace("NOMBRE", info);
  info = tienda[1]['productos'][1]['descripcion'];
  granny_smith = granny_smith.replace("DESCRIPCION", info);
  info = tienda[1]['productos'][1]['precio'];
  granny_smith = granny_smith.replace("PRECIO", info);
  info = tienda[1]['productos'][1]['stock'];
  granny_smith = granny_smith.replace("STOCK", info);


  //Lord
  let Lord_invocatus= Lord;
  info = tienda[1]['productos'][2]['nombre'];
  red_delicious = red_delicious.replace("NOMBRE", info);
  info = tienda[1]['productos'][2]['descripcion'];
  red_delicious = red_delicious.replace("DESCRIPCION", info);
  info = tienda[1]['productos'][2]['precio'];
  red_delicious = red_delicious.replace("PRECIO", info);
  info = tienda[1]['productos'][2]['stock'];
  red_delicious = red_delicious.replace("STOCK", info)


  //-- Entrega de formulario
  let user = FORMULARIO_LOGIN;
  let user_cookie = get_user(req);

  //-- Reemplazar en "logueado.html"
  user = RESPUESTA_LOGIN.replace("NOMBRE", nombre_user);
  let html_extra = "";
  let html_extra_condicion = "";

  if (nombre_user == login1_BD && pass == pass1_BD || nombre_user == login2_BD && pass == pass2_BD) {
    html_extra = "<h2>Está registrad@</h2>";
    html_extra_condicion = "<h2>¡A comprar!</h2>";
    //-- Login correcto --> almaceno cookie
    console.log("------------------------------",nombre_user);
    res.setHeader('Set-Cookie', "user=" + nombre_user);
  } else {
    html_extra = "<h2>Usuario y/o contraseña incorrectos!</h2>";
  }

  user = user.replace("HTML_EXTRA", html_extra);
  user = user.replace("HTML_EXTRA_CONDICION", html_extra_condicion);

  let carrito = ALACESTA;
  let carro = "";
  let carrear = get_carrito(req);


  let direccion = url.searchParams.get('direccion');
  let tarjeta = url.searchParams.get('tarjeta');


  //-- Se guarda el tipo de recurso, separando el nombre de la extensión
  resource = petition.split(".")[1];
  //-- Se añade un punto para que el sistema pueda buscarlo y mostrarlo
  petition = "." + petition;
  console.log("Nombre del recurso servido: " + petition);
  console.log("Extension del recurso: " + resource);

  //-- Generar la respusta en función de las variables
  res.statusCode = code;
  res.statusMessage = code_msg;

  //-- Cambiar el mimetype en funcion de la extensión del recurso
  switch (resource) {
    //Hoja de estilos
    case 'css': 
      mimetype = "text/css";
      break;
    //Imagenes  
    case 'jpg':
    case 'png':
    case 'jpeg':
      mimetype = "image/" + resource;
      break;
    //Archivos Javascript
    case 'js': 
      mimetype = "application/javascript";
      break;
    //Archivo HTML
    case 'html':
      mimetype = "text/html";
      break
  }


  //-- Lectura asincrona de los recursos a mostrar en la pagina
  fs.readFile(petition, (err, data) => {
  console.log(resource);
    if (err) {
      res.statusCode = 404
      res.statusMessage = "Not Found"
      petition = "error.html";
      data = fs.readFileSync(petition);
      res.setHeader('Content-Type', mimetype);
      res.write(data);
      return res.end();
    }
  //-- Escribo la cabecera del mensaje y muestro la pagina solicitada
  res.setHeader('Content-Type', mimetype);
  res.write(data);
  res.end();
  });
});



server.listen(PORT);
console.log("Server de la tienda escuchando en puerto: " +PORT+"...");


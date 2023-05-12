 # Práctica 3

**MANUAL DE USUARIO**

En esta práctica 3 tenemos un chat web. Para lanzar su servidor debemos escribir en el terminal integrado en la carpeta que contenga este proyecto (P3) "node server.js". Después debemos acceder desde un navegador con la URL 127.0.0.1:9000 (o con localhost:9000).

En primer lugar se mostrará una página de Bienvenida con el enlace al chat web.

Una vez dentro lo primero que se nos pide es un nombre de usuario. Una vez logueados ¡Ya podemos enviar mensajes!

Cuando se une un nuevo participante en la consola nos mostrará un contador con los participantes del chat, cuando estos se vayan desconectando, también nos aparecerá este mensaje pero con el contador con los participantes restantes.

*Comandos especiales*:

* /help : lista de todos los comandos disponibles
* /list : Nos mostrará el listado de los usuarios conectados
* /hello : El servidor nos enviará un mensaje saludándonos
* /date : Fecha
***
**MEJORAS**
* *Nickname de usuario*
* *Color de nickname distintivo*
* *Hora de envio de mensaje*
* *Nombre de usuarios conectados*

***

**DOCUMENTACIÓN TÉCNICA**

El servidor de chat utiliza la tecnología NODE

Para desplegar el chat es necesario importar los siguientes modulos:

* socket 
* http
* express
* colors
* fs

Para instalar los modulos no incluidos utilizar *npm*

El chat se despliega en el PUERTO 9000 de la direccion de IP local.

Descripción de ficheros que conforman chat web

* public/chat.html: pagina web estática del chat

* package.json -> información sobre el proyecto.

* package-lock.json -> Describe el árbol de dependencias generado para que en otras máquinas se pueda replicar igual (sin tener que guardar en el repositorio el propio arbol de dependencias).

* ids.json: fichero json en el que se almacenan los usuarios y su información correspondiente.

* cliente.js: establece la conexión con el servidor e intercambia mensajes con el.

* style.css: hoja de estilos del chat.

* server.js: servidor que gestiona las distintas peticiones del chat
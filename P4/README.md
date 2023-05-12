 # Práctica 4

**MANUAL DE USUARIO**

Este proyecto contiene una aplicación de escritorio multiplataforma generada con Electron.

Para poder lanzar la aplicación se debe lanzar en el terminal integrado en la página contenedora de este proyecto (P4) el siguiente comando "npm start".

Al arrancar, aparcerá una ventana emergente con la siguiente información:

* Información del sistema
    * Versión de Node
    * Versión de Electron
    * Versión de Chrome
    * Arquitectura
    * Plataforma
    * Versión del Sistema
    * Tipo de proceso actual
    * **Numero de suarios conectados**
    * **URL del chat** // *Link de acceso a dicha URL*. La URL se genera obteniendo la IP desde la cual accede el usuario que lanza la apliacion.
* Mensajes enviados

Para más instrucciones de uso (uso del chat) acceder al archivo  *README.md en la carpeta P3*

***

**DOCUMENTACIÓN TÉCNICA**
La aplicación se implementa utilizando la tecnologia Electron.
Para desplegar el chat es necesario importar los siguientes modulos:
* electron
* socket 
* http
* express
* colors
* fs
* ip
Para instalar los modulos no incluidos utilizar *npm*
El chat se despliega en el PUERTO 9000 de la direccion de IP local.


Descripción de los ficheros:

* public:
    * public/chat.html: página web estática del chat
    * public/cliente.js: establece la conexión con el servidor e intercambia mensajes con el.
    * public/style.css: hoja de estilos del chat.
    
* index.html : página contenedora de la página emergente previa al chat con la info dispuesta en el manual de este proyecto.
* package-lock.json -> Describe el árbol de dependencias generado para que en otras máquinas se pueda replicar igual (sin tener que guardar en el repositorio el propio arbol de dependencias).

* ids.json: fichero json en el que se almacenan los usuarios y su información correspondiente.

* main.js: servidor que gestiona las distintas peticiones del chat.

* index.js: intercambio de mensajes entre la app y el servidor.

* styleIndex.css: hoja de estilos de la página index.html.
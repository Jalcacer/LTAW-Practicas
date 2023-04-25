 # Práctica 1
** Manual de Usuario **

Para ejecutar la página web hemos de seguir los siguientes pasos:

1. Abrir el terminal y escribir:
> node tienda.js

2. Escribir en el navegador la siguiente URL:
> 127.0.0.1:9000

** Documentación Técnica ** 

La tienda cumple con las especificaciones básicas y no incluye mejoras:
    **http** escucha asíncrona de peticiones 
    **fs** lectura asíncrona de ficheros
    **url** paso de peticiones del cliente al servidor 
>
>En el navegador se podrá ver la respuesta del servidor (tienda creada)
>
>En la consola podemos ver cómo se devuelven a demás las cabeceras de las respuestas a las peticiones (status code,status message,mimetype,etc).
>
> Fichero
    * Nombre: *tienda.js*
    * Puerto escucha: 9090
>Posibilidad de servir los distintos tipos de archivos: html, javascript, css e imagenes (png,jpg,jpeg)
>
> Sin embargo, si se accede a un recursos no existente, genera una respuesta de error (404  Not Found), ya que no existe el recurso solicitado.
***

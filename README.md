# crea un puntero de un elemento en html a traves de su ID.
let variable = document.getElementById("nombre del ID");

# Este metodo nos sirve para verificar y devolver un valor booleano si el elemento esta seleccionado o no por el usuario o si el evento se hizo uso.
let variable = document.getElementById("nombre del ID").checked;  (devuelve true o false)

# Es un metodo que podemos asigarle al puntero que nos permite escuchar eventos y luego hacer una accion, no piden 2 parametros para que funciones. (evento , funcion)
variable.addEventListener('click', funcion);

# Esta metodo nos sirve para cambiar o agregar una palabra en HTML desde JS.Tenemos que primer crear un puntero a una etiqueta con un ID , generalmente un <span id="">, y luego aplicar el metodo para agregarle texto. 
variable.innerHTML="texto";

/////////////////////////////////////////////////////////////////////////////////////////
# 1.Crea un etiqueta desde JS para HTML.
var variable = document.createElement("p");
# 2.Crea un texto en el cual podemos asignar luego en html, similar a .innerHTML="texto", pero esta nos permite crea de manera mas eficiente mas texto.
var variableContent = document.createTextNode("Hola!¿Qué tal?");
# 3.este metodo introduce el texto creado por <document.createTextNode("Hola!¿Qué");> en la variable creada con el metodo <document.createElement("p",[options]);>
variable.appendChild(variableContent); //añade texto al p creado.
# 4. añade el elemento creado y su contenido al DOM
# creamos un puntero a la seccion que queremos ubicar la nueva etiqueta gracias a su ID.
var variableP = document.getElementById("idP");
# 5. Usamos el metodo <document.body.insertBefore(variable,variableP);> e ingreamos los 2 parametros, el 1° es la variable donde creamos el elemento HTML y el 2° es la variable donde tenemos señalizada con un puntero la ubicacion donde queremos que se coloque nuestra nueva etiqueta en nuestro HTML.
document.body.insertBefore(variable,variableP);

VARIANTE
 //creamos el puntero a la etiqueta en HTML
 <seccionMensaje=document.getElementById("mensaje");>
 //Utilizamos el metodo "createElement" y luego con el metodo ".innerHTML" introducimos el texto en esa etiqueta.
 <let parrafo=document.createElement("p") >
 <parrafo.innerHTML=("Tu mascota atacó con "+ataqueJugador+", las mascota del enemigo atacó con "+ataqueEnemigo+" - PENDIENTE");>
//seleccionamos la variable donde tenemos el puntero y llamamos al metodo ".appendChild" que inserta la ETIQUETA JUNTO AL MENSAJE en la seccion seleccionada.
 <seccionMensaje.appendChild(parrafo);>
////////////////////////////////////////////////////////////////////////////////////////////
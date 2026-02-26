# ¿Qué es Canvas?

Canvas es una etiqueta de HTML (`<canvas>`) que crea un área de dibujo dentro de la página web.  
Por sí sola está vacía: para pintar formas, texto, imágenes o hacer animaciones, se usa JavaScript con su contexto (normalmente `2d`).  
Se utiliza mucho en juegos, visualizaciones de datos y gráficos interactivos.
 
# const sectionVerMapa = document.getElementById('ver-mapa');
# const mapa = document.getElementById('mapa');
# const lienzo = mapa.getContext('2d');>
La variable lienzo se convierte en el área para nuestras creaciones gráficas.

¿Cómo insertar una imagen en lugar de formas simples?
<const imagenDeCapipepo = new Image();
imagenDeCapipepo.src = 'ruta/a/capipepo.png';
imagenDeCapipepo.onload = function() {
  lienzo.drawImage(imagenDeCapipepo, 20, 40, 100, 100);
};>

# Con drawImage, especificamos la imagen y las coordenadas para su despliegue.
1 primero creamos los puntero a la seccion de donde se va a encontrar el mapa, luego a la etiqueta canva. 
2 despues tenemos que crear una variable Linzo que nos permita renderizar estas imagenes con el metodo .getContext("2d"). Este metodo tiene que estar siendo utilizado en nuestra etiqueta canva 
3 para insertar la imagen debemos tener el contructor de Image guardado en una variable.
4 luego a dicha variable tenemos que acceder a su propiedad .src y asignarle nuestra imagen a mostrar.Una vez guardada la imagen en el en constructor de nuestra nueva variable
5 podemos llamar a dicha VARIEBLE y aplicarle el metodo .drawImage en donde nos pediran algunos parametros para mostrar la imagen: (imagen ,coordenada X,coordenada Y, ancho de imagen, alto de imagen )

# El metodo .onLoad esta siendo utilizado para cuando a penas cargue la pagina y se muestre la seccion, se muestre muestre la imagen. 
<imagenDeCapipepo.onload = function() {
  lienzo.drawImage(imagenDeCapipepo, 20, 40, 100, 100);
};
/*//////////////////

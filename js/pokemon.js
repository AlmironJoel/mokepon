//Punteros de HTML
//IniciarJuego()
const seccionMostrarAtaque=document.getElementById("selection-atack");//seleccionarMascotaJugador()
const seccionMostrarReinicio=document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById('boton-mascota');

const botonReiniciar=document.getElementById("reiniciar");
//seleccionarMascotaJugador()
const mascotaJugador=document.getElementById(`mokemonJugador`);
const jugadorVidas=document.getElementById("vidasJugador");
const pcVictorias=document.getElementById("victoriasEnemigo");
const seccionMostrarMascota=document.getElementById("selection-mokemon");
//seleccionarMascotaPC
const mokemonPC = document.getElementById("mokemonEnemigo");

//mostrarMensajeFinal()
 const seccionMensaje=document.getElementById("resultado");
//mostrarMensaje()
const seccionResultado=document.getElementById("resultado");
const seccionAtaquejugador=document.getElementById("ataque-jugador");
const seccionAtaqueEnemigo=document.getElementById("ataque-enemigo");
//combate()
const vidasJ=document.getElementById("vidasJugador");
const victoriasPC=document.getElementById("victoriasEnemigo");

//puntero renderizado
const tarjetasMokepones=document.getElementById("tarjetas-mokepones")
//puntero renderizado ataques
const botonesAtaques=document.getElementById("botones-de-ataque");
//resultado pelea
const resultadoPelea=document.getElementById("resultado-pelea")
//mapa
const seccionMapa=document.getElementById("seccion-mapa");
const mapa=document.getElementById("mapa");
const botonDerecha=document.getElementById("boton-derecha");
const botonIzquierda=document.getElementById("boton-izquierda");
const botonArriba=document.getElementById("boton-arriba");
const botonAbajo=document.getElementById("boton-abajo");

// ? ////////////////////////////////////////////////////////////////////////
//clase
class Mokepon {
    constructor(nombre,tipo,foto){
        this.nombre=nombre;
        this.tipo=tipo;
        this.foto=foto;
        this.ataques=[];
        this.victorias=[];
        this.x = 20; // posición inicial en X
        this.y = 20; // posición inicial en Y
        this.ancho =80; // ancho del personaje
        this.alto = 80; // alto del personaje
        this.mapaFoto= new Image();//creamos el constructor dentro del obejto para luego pasarle la foto
        this.mapaFoto.src=foto;//insertamos la foto
        this.velocidadX=0;
        this.velocidadY=0;
    }
}
//nuevos contructores
let capipepo=new Mokepon("Capipepo","tierra","/img/capipepo.webp");
let tucapalma=new Mokepon ("Tucapalma","tierra","/img/tucapalma.png")
let hipodoge=new Mokepon("Hipodoge","agua","/img/hipodoge.png");
let pydos=new Mokepon("Pydos","agua","img/pydos.png")
let langostelvis=new Mokepon("Langostelvis","fuego","/img/langostelvis.png")
let ratigueya=new Mokepon("Ratigueya","fuego","/img/ratigueya.webp");

let mokepones=[];//injectamos los nuevo objetos a la clase
mokepones.push(capipepo,hipodoge,ratigueya,pydos,langostelvis,tucapalma);

let validacion;
let extra={ nombre:'agua', id: "boton-agua" }
let noExtra={ nombre:'sin-ataque', id: "boton-sin-ataque" }

capipepo.ataques.push(
    { nombre:'agua', id: "boton-agua" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: 'fuego', id: "boton-fuego" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: "tierra", id: "boton-tierra" },
)
hipodoge.ataques.push(
    { nombre:'agua', id: "boton-agua" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: "fuego", id: "boton-fuego" },
    { nombre: "tierra", id: "boton-tierra" },
    { nombre: "fuego", id: "boton-fuego" }
)
ratigueya.ataques.push(
    { nombre:'agua', id: "boton-agua" },
    { nombre: "tierra", id: "boton-tierra" },
    { nombre:'fuego', id: "boton-fuego" },
    { nombre: "tierra", id: "boton-tierra" },
    { nombre: "fuego", id: "boton-fuego" }
)

pydos.ataques.push(
    { nombre: 'tierra', id: "boton-tierra" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: 'fuego', id: "boton-fuego" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: "tierra", id: "boton-tierra" }
)
tucapalma.ataques.push(
    { nombre: 'tierra', id: "boton-tierra" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: 'fuego', id: "boton-fuego" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: "agua", id: "boton-agua" }
)
langostelvis.ataques.push(
    { nombre: 'tierra', id: "boton-tierra" },
    { nombre:'fuego', id: "boton-fuego" },
    { nombre: 'fuego', id: "boton-fuego" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: "tierra", id: "boton-tierra" }
)

let ataqueJugador=[];//guarda la secuencia de ataques seleccionados.
let ataqueEnemigo=[];//Guarda secuencia ataques PC.
let ataqueMokeponPC=[];

let hipodogeSelect;
let capipepoSelect;
let ratigueyaSelect;
let langostelvisSelect;
let pydosSelect;
let tucapalmaSelect;

let botonFuego;
let botonAgua;
let botonTierra;
let botonNull;
let botones=[];//almacena la secuencia de ataques que renderizamos con la clase BAtaques.

let resultado;
let resultadoJugador=[];
let resultadoEnemigo=[];

let tipoMokeponJugador;
let tipoMokemonPC;
let mokemonSeleccionado;
let mokemonSeleccionadoPC;
let objetMokeponPJ;
let objetMokeponPC;
let opcionDeMokepon;
let opcionDeAtaques;
let victorias=0;
let victoriasEnemigo=0;

let lienzo =mapa.getContext("2d");
let intervalo;
let mapaBackground=new Image();
mapaBackground.src="./img/mokemap.webp"

//ajusta el escalado de img canvas
const dpr = window.devicePixelRatio || 1;
mapa.width = mapa.clientWidth * dpr;
mapa.height = mapa.clientHeight * dpr;
lienzo.scale(dpr, dpr)

function iniciarJuego() {
    seccionMapa.style.display='none';
    seccionMostrarAtaque.style.display = 'none'; // Oculta ataques
    seccionMostrarReinicio.style.display = 'none'; // ocultar reinicio
    //renderizado de tarjetas
    mokepones.forEach( (mokepon)=>{
        opcionDeMokepon=
    ` <input type="radio" name="mascota" id="${mokepon.nombre}">
          <label class="card-mokepon" for="${mokepon.nombre}">
                <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt="${mokepon.nombre}">
         </label> `

    tarjetasMokepones.innerHTML+=(opcionDeMokepon)

        hipodogeSelect=document.getElementById("Hipodoge");
        capipepoSelect=document.getElementById("Capipepo");
        ratigueyaSelect=document.getElementById("Ratigueya");
        tucapalmaSelect=document.getElementById("Tucapalma");
        langostelvisSelect=document.getElementById("Langostelvis");
        pydosSelect=document.getElementById("Pydos");
    }
    )

    
    //Mascota    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    botonReiniciar.addEventListener("click",reiniciarJuego);
}

function seleccionarMascotaJugador() {
    seccionMostrarMascota.style.display="none"; 
    //todo seccionMostrarAtaque.style.display = 'flex'; // muestra 
    
    jugadorVidas.innerHTML=victorias;
    pcVictorias.innerHTML=victoriasEnemigo

    if(!hipodogeSelect.checked && !capipepoSelect.checked && !ratigueyaSelect.checked && !tucapalmaSelect.checked && !langostelvisSelect.checked && !pydosSelect.checked ){
        alert("Necesitas seleccionar una mascota primero");
        return seccionMostrarAtaque.style.display = 'none'; //no muestra sin primero seleccionar una mascota
    }
    if(hipodogeSelect.checked){
        mascotaJugador.innerHTML=hipodogeSelect.id;
        mokemonSeleccionado=hipodogeSelect.id;
    }else if(capipepoSelect.checked){
        mascotaJugador.innerHTML=capipepoSelect.id;
        mokemonSeleccionado=capipepoSelect.id;
    } else if(ratigueyaSelect.checked){
        mascotaJugador.innerHTML=ratigueyaSelect.id;
        mokemonSeleccionado=ratigueyaSelect.id;
    } else if(langostelvisSelect.checked){
        mascotaJugador.innerHTML=langostelvisSelect.id;
        mokemonSeleccionado=langostelvisSelect.id;
    } else if(pydosSelect.checked){
        mascotaJugador.innerHTML=pydosSelect.id;
        mokemonSeleccionado=pydosSelect.id;
    }else if(tucapalmaSelect.checked){
        mascotaJugador.innerHTML=tucapalmaSelect.id;
        mokemonSeleccionado=tucapalmaSelect.id;    
    }
    
    seleccionarMascotaPC();
    extraerAtaques(mokemonSeleccionado);    
    seccionMapa.style.display='flex';
    inciarMapa();
    console.log(mokemonSeleccionadoPC);
    

}


function vertificarTipos(mokemonSeleccionado){
    for (let i = 0; i < mokepones.length; i++) {
        if (mokemonSeleccionado===mokepones[i].nombre) {
            tipoMokeponJugador=mokepones[i].tipo
        } 
    }
    
    let mokeponGanadorTipo;    

    if (tipoMokeponJugador===tipoMokemonPC) {
        seccionMensaje.innerHTML="Empate de tipos! Ambos mokepones carecen de un ataque extra"
        extra.nombre=tipoMokeponJugador
        extra.id=`boton-${tipoMokeponJugador}`
    }//ninguno tiene un ataque extra;
    else if(tipoMokeponJugador=="tierra"&&tipoMokemonPC=="agua"){
        validacion=true;
        extra.nombre=tipoMokeponJugador
        extra.id=`boton-${tipoMokeponJugador}`
        seccionMensaje.innerHTML=`${mokemonSeleccionado} tiene la ventaja por ser tipo ${extra.nombre} tiene un ataque extra`

   }else if(tipoMokeponJugador=="agua"&&tipoMokemonPC=="fuego"){
        validacion=true;
        extra.nombre=tipoMokeponJugador
        extra.id=`boton-${tipoMokeponJugador}`
        seccionMensaje.innerHTML=`${mokemonSeleccionado} tiene la ventaja por ser tipo ${extra.nombre} tiene un ataque extra`

   }else if(tipoMokeponJugador=="fuego"&&tipoMokemonPC=="tierra"){
        validacion=true;
        extra.nombre=tipoMokeponJugador
        extra.id=`boton-${tipoMokeponJugador}`
        seccionMensaje.innerHTML=`${mokemonSeleccionado} tiene la ventaja por ser tipo ${extra.nombre} tiene un ataque extra`

   }else{
    validacion=false;
    extra.nombre=tipoMokemonPC
    extra.id=`boton-${tipoMokemonPC}`
    seccionMensaje.innerHTML=`${mokemonSeleccionadoPC} tiene la ventaja por ser tipo ${extra.nombre} tiene un ataque extra`
   }
   
   if (validacion) {
    mokeponGanadorTipo=mokemonSeleccionado;
   }else{
    mokeponGanadorTipo=mokemonSeleccionadoPC
   }
 
   
   for (let i = 0; i < mokepones.length; i++) {

        if (mokeponGanadorTipo===mokepones[i].nombre) {
            let mokepon = mokepones[i].ataques
            mokepon.push(extra);
        } else if(mokeponGanadorTipo!==mokepones[i].nombre) {
            let mokepon = mokepones[i].ataques
            mokepon.push(noExtra);
        }
    }



}


function extraerAtaques(mokemonSeleccionado){

    vertificarTipos(mokemonSeleccionado);

    for (let i = 0; i < mokepones.length; i++) {
        if (mokemonSeleccionado==mokepones[i].nombre) {
            ataques=mokepones[i].ataques
            mokeVictoria=mokepones[i].victorias
            
            mostrarAtaques(ataques)
        }      
    }
}

function mostrarAtaques(ataques) {
    //ataques
    ataques.forEach((ataques)=>{
        opcionDeAtaques=`
        <button class="boton-ataque BAtaque" id=${ataques.id}>${ataques.nombre}</button>
        `        
        botonesAtaques.innerHTML+=opcionDeAtaques;
    })

    botonFuego=document.getElementById("boton-fuego");
    botonAgua=document.getElementById("boton-agua");
    botonTierra=document.getElementById("boton-tierra");
    botonNull=document.getElementById("boton-sin-ataque");
    botones=document.querySelectorAll(".BAtaque");    
    
    secuenciaAtaques();
}

function secuenciaAtaques(){

    botones.forEach((boton)=>{
        boton.addEventListener("click",(event)=>{  
            let ataqueseleccionado="";
            if(event.target.textContent=="sin-ataque"){
                ataqueseleccionado=event.target.textContent
                ataqueJugador.push(ataqueseleccionado);
                boton.style.backgroundColor = "#e93d12";
                boton.style.textDecoration ='line-through';
                boton.disabled=true;
            }
            if(event.target.textContent=="fuego"){
                ataqueseleccionado=event.target.textContent
                ataqueJugador.push(ataqueseleccionado);
                boton.style.backgroundColor = "#54515b";
                boton.disabled=true;
            }
            if(event.target.textContent=="tierra"){
                ataqueseleccionado=event.target.textContent
                ataqueJugador.push(ataqueseleccionado);
                boton.style.backgroundColor = "#54515b";
                boton.disabled=true;
            }
            if(event.target.textContent=="agua"){
                ataqueseleccionado=event.target.textContent
                ataqueJugador.push(ataqueseleccionado);
                boton.style.backgroundColor = "#54515b";
                boton.disabled=true;
            }

        seleccionAtaquePC()
                
          if (ataqueJugador.length==6) {
            combate();
            mostrarMensaje()
          }

        } )
    })

    
}

function seleccionarMascotaPC () {
  let numAleatorio= aleatorio(0,mokepones.length-1);
  mokemonPC.innerHTML=mokepones[numAleatorio].nombre;

  tipoMokemonPC=mokepones[numAleatorio].tipo;
  mokemonSeleccionadoPC=mokepones[numAleatorio].nombre;

  ataqueMokeponPC=mokepones[numAleatorio].ataques;

}

function aleatorio (min,max){
return Math.floor( Math.random() * (max-min+1) + min);
}

function verificarVidas (){
    if(victorias>victoriasEnemigo){
        mostrarMensajeFinal("SIIIII Ganaste!!!");
    }else  if(victorias<victoriasEnemigo){
        mostrarMensajeFinal("OHHH Perdiste!");
    }else{
        mostrarMensajeFinal("EMPATE!!!...");
    }
    let seccionMostrarReinicio=document.getElementById("reiniciar");
    seccionMostrarReinicio.style.display = 'block'; // muestra    

}

function mostrarMensajeFinal(resultado){
 seccionMensaje.innerHTML=resultado ;
}

function seleccionAtaquePC(){
    let numAleatorio=aleatorio(0,ataqueMokeponPC.length-1);
    ataqueEnemigo.push(ataqueMokeponPC[numAleatorio].nombre);   
}
function mostrarMensaje(){
    for (let i = 0; i < resultadoJugador.length; i++) {
        //ataque jugador
           let parrafoAtaqueJugador=document.createElement("p");
            parrafoAtaqueJugador.innerHTML=resultadoJugador[i];
            seccionAtaquejugador.appendChild(parrafoAtaqueJugador);
        //ataque enemigo
          let parrafoAtaqueEnemigo=document.createElement("p");
            parrafoAtaqueEnemigo.innerHTML=resultadoEnemigo[i];
            seccionAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo);
        //resultado de rondas
        let parrafoResultadoRonda=document.createElement("p");
        parrafoResultadoRonda.innerHTML=mokeVictoria[i];
        resultadoPelea.
        appendChild(parrafoResultadoRonda);

    }
    verificarVidas ()
}


function combate (){

for (let i = 0; i < ataqueJugador.length; i++) {
    if(ataqueJugador[i]==ataqueEnemigo[i]){
        resultado="empate";
        mokeVictoria[i]="⭕"
        guardarResultado(i);
    }else if(ataqueJugador[i]=="fuego" && ataqueEnemigo[i]=="tierra"||ataqueJugador[i]=="fuego"&& ataqueEnemigo[i]=="sin-ataque"){
        resultado="ganaste";
        guardarResultado(i);
        mokeVictoria[i]="✅";
        victorias++;
        vidasJ.innerHTML=victorias;
        
    }else if(ataqueJugador[i]=="tierra"&& ataqueEnemigo[i]=="agua"||ataqueJugador[i]=="tierra"&& ataqueEnemigo[i]=="sin-ataque"){
        resultado="ganaste";
        mokeVictoria[i]="✅";
        guardarResultado(i);
        victorias++;
        vidasJ.innerHTML=victorias;
        
    }else if(ataqueJugador[i]=="agua"&& ataqueEnemigo[i]=="fuego"||ataqueJugador[i]=="agua"&& ataqueEnemigo[i]=="sin-ataque"){
        resultado="ganaste";
        mokeVictoria[i]="✅";
        guardarResultado(i);
        victorias++;
        vidasJ.innerHTML=victorias;
        
    }else{
        resultado="perdiste";
        guardarResultado(i);
        mokeVictoria[i]="❎"
        victoriasEnemigo++;
        victoriasPC.innerHTML=victoriasEnemigo;
    }
  }  
}

function guardarResultado(index){
        resultadoJugador.push(ataqueJugador[index]);
        resultadoEnemigo.push(ataqueEnemigo[index]);    
}

function reiniciarJuego(){
    location.reload();
}
//? Canvas -funciones
function inciarMapa(){
    objetMokeponPJ=extrarMokeponObjet(mokemonSeleccionado);
    objetMokeponPC=extrarMokeponObjet(mokemonSeleccionadoPC);
    console.log(objetMokeponPC,objetMokeponPJ);
    
    intervalo=setInterval(pintarPersonaje,50)
    
    botonDerecha.addEventListener("mouseup",detenerMovimiento)
    botonDerecha.addEventListener("mousedown",moverDerecha)
    botonIzquierda.addEventListener("mouseup",detenerMovimiento)
    botonIzquierda.addEventListener("mousedown",moverIzquierda)
    botonArriba.addEventListener("mouseup",detenerMovimiento)
    botonArriba.addEventListener("mousedown",moverArriba)
    botonAbajo.addEventListener("mouseup",detenerMovimiento)
    botonAbajo.addEventListener("mousedown",moverAbajo)
    
    window.addEventListener("keydown",detectarTecla);
    window.addEventListener("keyup",detenerMovimiento)
}

function pintarPersonaje (){
    objetMokeponPJ.x += objetMokeponPJ.velocidadX;
    objetMokeponPJ.y += objetMokeponPJ.velocidadY;
    
    lienzo.clearRect(0,0,mapa.width,mapa.height);

    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

     lienzo.drawImage(
            objetMokeponPJ.mapaFoto,
            objetMokeponPJ.x,
            objetMokeponPJ.y,
            objetMokeponPJ.ancho,
            objetMokeponPJ.alto
            )
}

function detenerMovimiento(){
    objetMokeponPJ.velocidadX=0;

    objetMokeponPJ.velocidadY=0;
}

function moverDerecha(){
        objetMokeponPJ.velocidadX= 5;
}
function moverIzquierda(){
        objetMokeponPJ.velocidadX= -5;  
}
function moverArriba(){
    
        objetMokeponPJ.velocidadY=-5;
    
}
function moverAbajo(){
    
        objetMokeponPJ.velocidadY =5;
    
}
function detectarTecla(e){
    console.log(e.key)
    switch (e.key) {
        case "ArrowUp":
                moverArriba();
            break;
        case "ArrowDown":
                moverAbajo();
            break;
        case "ArrowRight":
                moverDerecha();
            break;
        case "ArrowLeft":
                moverIzquierda();
            break;
    }
}
function extrarMokeponObjet(mokepon){
    for (let i = 0; i < mokepones.length; i++) {
        if (mokepon==mokepones[i].nombre) {
            return mokepones[i];
        }      
    }
}

//todo 
window.addEventListener("load", iniciarJuego);
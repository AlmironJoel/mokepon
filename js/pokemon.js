//Punteros de HTML
//IniciarJuego()
const seccionMostrarAtaque=document.getElementById("selection-atack");//seleccionarMascotaJugador()
const seccionMostrarReinicio=document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById('boton-mascota');

const botonReiniciar=document.getElementById("reiniciar");
//seleccionarMascotaJugador()
const mascotaJugador=document.getElementById(`mokemonJugador`);
const jugadorVidas=document.getElementById("vidasJugador");
const pcVidas=document.getElementById("vidasEnemigo");
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
const vidasPC=document.getElementById("vidasEnemigo");
//puntero renderizado
const tarjetasMokepones=document.getElementById("tarjetas-mokepones")
//puntero renderizado ataques
const botonesAtaques=document.getElementById("botones-de-ataque");
// ? ////////////////////////////////////////////////////////////////////////
//clase
class Mokepon {
    constructor(nombre,vida,foto){
        this.nombre=nombre;
        this.vida=vida;
        this.foto=foto;
        this.ataques=[];
    }
}
let capipepo=new Mokepon("Capipepo",5,"/img/capipepo.png");
let hipodoge=new Mokepon("Hipodoge",2,"/img/hipodogue.png");
let ratigueya=new Mokepon("Ratigueya",4,"/img/ratigueya.png");

let mokepones=[];
mokepones.push(capipepo,hipodoge,ratigueya);

capipepo.ataques.push(
    { nombre: 'tierra', id: "boton-tierra" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: 'fuego', id: "boton-fuego" },
    { nombre:'agua', id: "boton-agua" },
    { nombre: "tierra", id: "boton-tierra" }
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

let ataqueJugador;
let ataqueEnemigo;
let hipodogeSelect;
let capipepoSelect;
let ratigueyaSelect;

let botonFuego;
let botonAgua;
let botonTierra;

let mokemonSeleccionado=hipodoge.ataques;
let opcionDeMokepon;
let opcionDeAtaques;
let vidasJugador=3;
let vidasEnemigo=3;
function iniciarJuego() {
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
    }
    )

    
    //Mascota    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    botonReiniciar.addEventListener("click",reiniciarJuego);
}

function seleccionarMascotaJugador() {
    jugadorVidas.innerHTML=vidasJugador;
    pcVidas.innerHTML=vidasEnemigo
    if(!hipodogeSelect.checked && !capipepoSelect.checked && !ratigueyaSelect.checked){
        alert("Necesitas seleccionar una mascota primero");
        return seccionMostrarAtaque.style.display = 'none'; //no muestra sin primero seleccionar una mascota
    }
    seccionMostrarMascota.style.display="none"; 
    seccionMostrarAtaque.style.display = 'flex'; // muestra
    if(hipodogeSelect.checked){
        mascotaJugador.innerHTML=hipodogeSelect.id;
        mokemonSeleccionado=hipodogeSelect.id;
    }else if(capipepoSelect.checked){
        mascotaJugador.innerHTML=capipepoSelect.id;
        mokemonSeleccionado=hipodogeSelect.id;
    } else if(ratigueyaSelect.checked){
        mascotaJugador.innerHTML=ratigueyaSelect.id;
        mokemonSeleccionado=hipodogeSelect.id;
    }
    extraerAtaques(mokemonSeleccionado);
    seleccionarMascotaPC();
}
function extraerAtaques(mokemonSeleccionado){
    for (let i = 0; i < mokepones.length; i++) {
        if (mokemonSeleccionado==mokepones[i].nombre) {
            ataques=mokepones[i].ataques
            mostrarAtaques(ataques)
        }      
    }
}

function mostrarAtaques(ataques) {
    //ataques
    ataques.forEach((ataques)=>{
        opcionDeAtaques=`
        <button class="boton-ataque" id=${ataques.id}>${ataques.nombre}</button>
        `        
        botonesAtaques.innerHTML+=opcionDeAtaques;
    })

    botonFuego=document.getElementById("boton-fuego");
    botonAgua=document.getElementById("boton-agua");
    botonTierra=document.getElementById("boton-tierra");

    botonFuego.addEventListener("click",ataqueFuego);
    botonAgua.addEventListener("click",ataqueAgua);
    botonTierra.addEventListener("click",ataqueTierra);
}

function seleccionarMascotaPC () {
  let numAleatorio= aleatorio(0,mokepones.length-1);
  console.log(numAleatorio)
 mokemonPC.innerHTML=mokepones[numAleatorio].nombre;
}

function aleatorio (min,max){
return Math.floor( Math.random() * (max-min+1) + min);
}

function ataqueFuego(){
    ataqueJugador="fuego";
    seleccionAtaquePC();
    if (vidasEnemigo>0&&vidasJugador>0) {
        mostrarMensaje();
    }else{
        verificarVidas();
    }
}
function ataqueAgua(){
    ataqueJugador="agua";
    seleccionAtaquePC();
    if (vidasEnemigo>0&&vidasJugador>0) {
        mostrarMensaje();
    }else{
        verificarVidas();
    }
  
}
function ataqueTierra(){
    ataqueJugador="tierra";
    seleccionAtaquePC();
    if (vidasEnemigo>0&&vidasJugador>0) {
        mostrarMensaje();
    }else{
        verificarVidas();
    }
}

function verificarVidas (){
    if(vidasJugador==0){
        mostrarMensajeFinal("OHHH Perdiste!");
    }else if(vidasEnemigo == 0){
        mostrarMensajeFinal("SIIIII Ganaste!!!");
    }
    botonFuego.disabled=true;
    botonAgua.disabled=true;
    botonTierra.disabled=true;

    let seccionMostrarReinicio=document.getElementById("reiniciar");
    seccionMostrarReinicio.style.display = 'block'; // muestra    

}

function mostrarMensajeFinal(resultado){
 seccionMensaje.innerHTML=resultado ;
}

function seleccionAtaquePC(){
    let numAleatorio=aleatorio(1,3);

    if (numAleatorio==1) {
      ataqueEnemigo="fuego";
  }else if (numAleatorio==2){
      ataqueEnemigo="agua";
    }else{
      ataqueEnemigo="tierra";
  }
    
}
function mostrarMensaje(){
 //resultado
    let resultado = combate();
    seccionResultado.innerHTML= resultado;
//ataque jugador
    parrafoAtaqueJugador=document.createElement("p");
    parrafoAtaqueJugador.innerHTML=ataqueJugador;
    seccionAtaquejugador.appendChild(parrafoAtaqueJugador);
//ataque enemigo
    parrafoAtaqueEnemigo=document.createElement("p");
    parrafoAtaqueEnemigo.innerHTML=ataqueEnemigo;
    seccionAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo);
}


function combate (){
    let resultado="";

    if(ataqueJugador==ataqueEnemigo){
        resultado="empate";
        return resultado
    }

    if(ataqueJugador=="fuego" && ataqueEnemigo=="tierra"){
        resultado="ganaste";
        if(vidasEnemigo>0){
            vidasEnemigo--;
            vidasPC.innerHTML=vidasEnemigo;
        }
        return resultado;
    }else if(ataqueJugador=="tierra"&& ataqueEnemigo=="agua"){
        resultado="ganaste";
        if(vidasEnemigo>0){
            vidasEnemigo--;
            vidasPC.innerHTML=vidasEnemigo;}
        return resultado;
    }else if(ataqueJugador=="agua"&& ataqueEnemigo=="fuego"){
        resultado="ganaste";
        if(vidasEnemigo>0){
            vidasEnemigo--;
            vidasPC.innerHTML=vidasEnemigo;}
        return resultado;
    }else{
        resultado="perdiste";
        if(vidasJugador>0){
            vidasJugador--;
            vidasJ.innerHTML=vidasJugador;}
        return resultado;
    }
}
function reiniciarJuego(){
    location.reload();
}

//todo 
window.addEventListener("load", iniciarJuego);
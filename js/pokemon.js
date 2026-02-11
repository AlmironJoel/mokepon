//Punteros de HTML
//IniciarJuego()
let seccionMostrarAtaque=document.getElementById("selection-atack");//seleccionarMascotaJugador()
let seccionMostrarReinicio=document.getElementById("reiniciar");
let botonMascotaJugador = document.getElementById('boton-mascota');
let botonFuego=document.getElementById("boton-fuego");//verificarVidas()
let botonAgua=document.getElementById("boton-agua");//verificarVidas()
let botonTierra=document.getElementById("boton-tierra");//verificarVidas()
let botonReiniciar=document.getElementById("reiniciar");
//seleccionarMascotaJugador()
let mascotaJugador=document.getElementById(`mokemonJugador`);
let jugadorVidas=document.getElementById("vidasJugador");
let pcVidas=document.getElementById("vidasEnemigo");
let seccionMostrarMascota=document.getElementById("selection-mokemon");

//seleccionarMascotaPC
let mokemonPC = document.getElementById("mokemonEnemigo");

//mostrarMensajeFinal()
 seccionMensaje=document.getElementById("resultado");
//mostrarMensaje()
seccionResultado=document.getElementById("resultado");
seccionAtaquejugador=document.getElementById("ataque-jugador");
seccionAtaqueEnemigo=document.getElementById("ataque-enemigo");
//combate()
let vidasJ=document.getElementById("vidasJugador");
let vidasPC=document.getElementById("vidasEnemigo");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador=3;
let vidasEnemigo=3;
function iniciarJuego() {
    seccionMostrarAtaque.style.display = 'none'; // Oculta ataques
    seccionMostrarReinicio.style.display = 'none'; // ocultar reinicio
    //Mascota
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    botonFuego.addEventListener("click",ataqueFuego);
    botonAgua.addEventListener("click",ataqueAgua);
    botonTierra.addEventListener("click",ataqueTierra);

    botonReiniciar.addEventListener("click",reiniciarJuego);
}

function seleccionarMascotaJugador() {
    jugadorVidas.innerHTML=vidasJugador;
    pcVidas.innerHTML=vidasEnemigo
    let hipodogeSelect=document.getElementById("hipodoge").checked;
    let capipepoSelect=document.getElementById("capipepo").checked;
    let ratigueyaSelect=document.getElementById("ratigueya").checked;

    if(!hipodogeSelect && !capipepoSelect && !ratigueyaSelect){
     alert("Necesitas seleccionar una mascota primero");
        seccionMostrarAtaque.style.display = 'none'; //no muestra sin primero seleccionar una mascota
    }   
    
    if(hipodogeSelect){
        mascotaJugador.innerHTML="Hipodoge";
        seccionMostrarMascota.style.display="none"; 
        seccionMostrarAtaque.style.display = 'flex'; // muestra
    }else if(capipepoSelect){
        mascotaJugador.innerHTML="Capipepo";
        seccionMostrarMascota.style.display="none"; 
        seccionMostrarAtaque.style.display = 'flex'; // muestra
    } else if(ratigueyaSelect){
        mascotaJugador.innerHTML="Ratigueya";
        seccionMostrarMascota.style.display="none"; 
        seccionMostrarAtaque.style.display = 'flex'; // muestra
    }
    seleccionarMascotaPC();

}

function seleccionarMascotaPC () {
  let numAleatorio= aleatorio(1,3);
  if (numAleatorio==1) {
      mokemonPC.innerHTML="Hipodoge"
  }else if (numAleatorio==2){
      mokemonPC.innerHTML="Capipepo"
    }else{
    mokemonPC.innerHTML="Ratigueya"
  }

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
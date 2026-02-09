let ataqueJugador;
let ataqueEnemigo;
let vidasJugador=3;
let vidasEnemigo=3;
function iniciarJuego() {
    let seccionMostrarAtaque=document.getElementById("selection-atack");
    seccionMostrarAtaque.style.display = 'none'; // Oculta ataques

    let seccionMostrarReinicio=document.getElementById("reiniciar");
    seccionMostrarReinicio.style.display = 'none'; // ocultar reinicio
    //Mascota
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    let botonFuego=document.getElementById("boton-fuego");
    botonFuego.addEventListener("click",ataqueFuego);
    let botonAgua=document.getElementById("boton-agua");
    botonAgua.addEventListener("click",ataqueAgua);
    let botonTierra=document.getElementById("boton-tierra");
    botonTierra.addEventListener("click",ataqueTierra);

    let botonReiniciar=document.getElementById("reiniciar");
    botonReiniciar.addEventListener("click",reiniciarJuego);
}

function seleccionarMascotaJugador() {
    let hipodogeSelect=document.getElementById("hipodoge").checked;
    let capipepoSelect=document.getElementById("capipepo").checked;
    let ratigueyaSelect=document.getElementById("ratigueya").checked;

    let mascotaJugador=document.getElementById(`mokemonJugador`);
    let jugadorVidas=document.getElementById("vidasJugador");
    jugadorVidas.innerHTML=vidasJugador;
    let pcVidas=document.getElementById("vidasEnemigo");
    pcVidas.innerHTML=vidasEnemigo

    if(hipodogeSelect){
        mascotaJugador.innerHTML="Hipodoge";
    }else if(capipepoSelect){
        mascotaJugador.innerHTML="Capipepo";
    } else if(ratigueyaSelect){
        mascotaJugador.innerHTML="Ratigueya";
    }else{
     alert("Necesitas seleccionar una mascota primero");   
    }
    seleccionarMascotaPC();
    let seccionMostrarAtaque=document.getElementById("selection-atack");
    seccionMostrarAtaque.style.display = 'flex'; // muestra
    let seccionMostrarMascota=document.getElementById("selection-mokemon");
    seccionMostrarMascota.style.display="none"; 
}

function seleccionarMascotaPC () {
  let numAleatorio= aleatorio(1,3);
  let mokemonPC = document.getElementById("mokemonEnemigo");
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
    let botonFuego=document.getElementById("boton-fuego");
    botonFuego.disabled=true;
    let botonAgua=document.getElementById("boton-agua");
    botonAgua.disabled=true;
    let botonTierra=document.getElementById("boton-tierra");
    botonTierra.disabled=true;

    let seccionMostrarReinicio=document.getElementById("reiniciar");
    seccionMostrarReinicio.style.display = 'block'; // muestra    

}

function mostrarMensajeFinal(resultado){
 seccionMensaje=document.getElementById("resultado");
 //let mensajeFinal=document.createElement("p");
 seccionMensaje.innerHTML=resultado ;
 //seccionMensaje.appendChild(mensajeFinal);

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
    seccionResultado=document.getElementById("resultado");    
    let resultado = combate();
    seccionResultado.innerHTML= resultado;

//ataque jugador
    seccionAtaquejugador=document.getElementById("ataque-jugador");
    parrafoAtaqueJugador=document.createElement("p");
    parrafoAtaqueJugador.innerHTML=ataqueJugador;
    seccionAtaquejugador.appendChild(parrafoAtaqueJugador);
//ataque enemigo
seccionAtaqueEnemigo=document.getElementById("ataque-enemigo");
    parrafoAtaqueEnemigo=document.createElement("p");
    parrafoAtaqueEnemigo.innerHTML=ataqueEnemigo;
    seccionAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo);
}


function combate (){
    let resultado="";
    let vidasJ=document.getElementById("vidasJugador");
    let vidasPC=document.getElementById("vidasEnemigo");

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
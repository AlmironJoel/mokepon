function iniciarJuego() {
    //Mascota
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    
    //Ataque jugador
    let ataqueJugador;
    let ataqueEnemigo;

    let botonFuego=document.getElementById("boton-fuego");
    botonFuego.addEventListener("click",ataqueFuego);
    let botonAgua=document.getElementById("boton-agua");
    botonAgua.addEventListener("click",ataqueAgua);
    let botonTierra=document.getElementById("boton-tierra");
    botonTierra.addEventListener("click",ataqueTierra);
}

function seleccionarMascotaJugador() {
    let hipodogeSelect=document.getElementById("hipodoge").checked;
    let capipepoSelect=document.getElementById("capipepo").checked;
    let ratigueyaSelect=document.getElementById("ratigueya").checked;
    let mascotaJugador=document.getElementById(`mokemonJugador`);
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
    let mensajeAtaqueJugador=document.getElementById("ataque-jugador");
    ataqueJugador="fuego";
    mensajeAtaqueJugador.innerHTML=ataqueJugador;
    seleccionAtaquePC();
}
function ataqueAgua(){
    ataqueJugador="agua";
    let mensajeAtaqueJugador=document.getElementById("ataque-jugador");
    mensajeAtaqueJugador.innerHTML=ataqueJugador;
    seleccionAtaquePC();
  
}
function ataqueTierra(){
    ataqueJugador="tierra";
    let mensajeAtaqueJugador=document.getElementById("ataque-jugador");
    mensajeAtaqueJugador.innerHTML=ataqueJugador;
    seleccionAtaquePC();
}

function seleccionAtaquePC(){
    let numAleatorio=aleatorio(1,3);
    console.log(numAleatorio);
    let mensajeAtaqueEnemigo=document.getElementById("ataque-enemigo");

    if (numAleatorio==1) {
      ataqueEnemigo="Fuego";
      mensajeAtaqueEnemigo.innerHTML=ataqueEnemigo;
      console.log(ataqueEnemigo);
  }else if (numAleatorio==2){
      ataqueEnemigo="Agua";
      console.log(ataqueEnemigo);
      mensajeAtaqueEnemigo.innerHTML=ataqueEnemigo;
    }else{
      ataqueEnemigo="Tierra";
      console.log(ataqueEnemigo);
      mensajeAtaqueEnemigo.innerHTML=ataqueEnemigo;
  }
    
}
window.addEventListener('load', iniciarJuego)
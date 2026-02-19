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
//resultado pelea
const resultadoPelea=document.getElementById("resultado-pelea")
console.log(resultadoPelea);

// ? ////////////////////////////////////////////////////////////////////////
//clase
class Mokepon {
    constructor(nombre,vida,foto){
        this.nombre=nombre;
        this.vida=vida;
        this.foto=foto;
        this.ataques=[];
        this.victorias=[];
    }
}
let capipepo=new Mokepon("Capipepo",5,"/img/capipepo.webp");
let hipodoge=new Mokepon("Hipodoge",2,"/img/hipodoge.png");
let ratigueya=new Mokepon("Ratigueya",5,"/img/ratigueya.webp");
let pydos=new Mokepon("Pydos",5,"img/pydos.png")
let langostelvis=new Mokepon("Langostelvis",5,"/img/langostelvis.png")
let tucapalma=new Mokepon ("Tucapalma",5,"/img/tucapalma.png")

let mokepones=[];
mokepones.push(capipepo,hipodoge,ratigueya,pydos,langostelvis,tucapalma);

let validacion=true;
let extra={ nombre:'agua', id: "boton-agua" }
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
let botones=[];//almacena la secuencia de ataques que renderizamos con la clase BAtaques.

let resultado;
let resultadoJugador=[];
let resultadoEnemigo=[];

let mokemonSeleccionado;
let opcionDeMokepon;
let opcionDeAtaques;
let victorias=0;
let victoriasEnemigo=0;
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
    jugadorVidas.innerHTML=victorias;
    pcVidas.innerHTML=victoriasEnemigo

    if(!hipodogeSelect.checked && !capipepoSelect.checked && !ratigueyaSelect.checked && !tucapalmaSelect.checked && !langostelvisSelect.checked && !pydosSelect.checked ){
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

    extraerAtaques(mokemonSeleccionado);
    console.log(mokemonSeleccionado);
    
    seleccionarMascotaPC();
}
function extraerAtaques(mokemonSeleccionado){

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
    botones=document.querySelectorAll(".BAtaque");      
}

function secuenciaAtaques(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(event)=>{
            let ataqueseleccionado="";
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

          if (ataqueJugador.length==5) {
            combate();
            mostrarMensaje()
          }
          console.log("jugador",ataqueJugador,"Enemigo",ataqueEnemigo);
        } )
    })

    
}

function seleccionarMascotaPC () {
  let numAleatorio= aleatorio(0,mokepones.length-1);
 mokemonPC.innerHTML=mokepones[numAleatorio].nombre;
 secuenciaAtaques();
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

    if (numAleatorio==0||numAleatorio==1) {
      ataqueEnemigo.push("fuego");
  }else if (numAleatorio==2||numAleatorio==3){
      ataqueEnemigo.push("agua");
    }else{
      ataqueEnemigo.push("tierra");
  }    
}
function mostrarMensaje(){
    console.log('Estamos en mostrar mesanje');
    console.log('Jugador :',resultadoJugador,'Enemigo :',resultadoEnemigo);
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
        resultadoPelea.appendChild(parrafoResultadoRonda);

    }
    verificarVidas ()
}


function combate (){
console.log("victorias",mokeVictoria);

for (let i = 0; i < ataqueJugador.length; i++) {
    if(ataqueJugador[i]==ataqueEnemigo[i]){
        resultado="empate";
        mokeVictoria[i]="⭕"
        guardarResultado(i);
    }else if(ataqueJugador[i]=="fuego" && ataqueEnemigo[i]=="tierra"){
        resultado="ganaste";
        guardarResultado(i);
        mokeVictoria[i]="✅";
        victorias++;
        vidasJ.innerHTML=victorias;
        
    }else if(ataqueJugador[i]=="tierra"&& ataqueEnemigo[i]=="agua"){
        resultado="ganaste";
        mokeVictoria[i]="✅";
        guardarResultado(i);
        victorias++;
        vidasJ.innerHTML=victorias;
        
    }else if(ataqueJugador[i]=="agua"&& ataqueEnemigo[i]=="fuego"){
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
        vidasPC.innerHTML=victoriasEnemigo;
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

//todo 
window.addEventListener("load", iniciarJuego);
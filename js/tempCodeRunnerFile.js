function seleccionarAtaqueJugador(botonAtaqueFuego,botonAtaqueTierra,botonAtaqueAgua){
    if(botonAtaqueFuego){
        alert("Seleccionaste a Fuego!!!");
    }else if(botonAtaqueTierra){
        alert("Seleccionaste a Tierra!!!");
    } else if(botonAtaqueAgua){
        alert("Seleccionaste a Agua!!!");
    }else{
     alert("Necesitas seleccionar una ataque primero");   
    }
}
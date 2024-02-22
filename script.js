//cargo en un arreglo las imagenes de las banderas. Este sera el orden que se mostraran
let banderas = ["atencion-al-cliente.png", "fase-2.png", "fase-3.png", "fase-4.png", "fase-5.png", "atencion-al-cliente.png", "fase-2.png", "fase-3.png"];


//arreglo que guardara la opcion correcta
let correcta = [1,2,1,1,2,3,2,1];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones= [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["Contacto", "Acercamiento", "Asesoramiento", "Comunicación",]);
opciones.push(["Bienvenido a Dido Veterinaria. ¿En qué le puedo ayudar?", "Buenos días, tardes o noches. Bienvenido a Dido Veterinaria", "Buenos días, tardes o noches. ¿En qué le puedo ayudar?", "Hola, ¿En qué le puedo ayudar?",]);
opciones.push(["Dar precios claros y completos", "Mencionar Promociones", "Formular medicamente sin autorización", "Direccionar a los clientes a adquirir los servicios",]);
opciones.push(["Actualización de datos", "Renovación de información", "Reingreso de datos", "Registro de datos",]);
opciones.push(["Nombre, Numero de identificación, dirección, tipo de mascotas", "Número de identificación, teléfono, correo electrónico, nombre, dirección, fecha de nacimiento, tipo y nombre de mascota", "Número de identificación, teléfono, nombre, dirección y tipo de mascotas", "Número de identificación, teléfono, correo electrónico, nombre, dirección, y tipo de mascotas",]);
opciones.push(["Nombre de los productos y cantidades", "Nombre de los productos, tamaños, cantidades", "Tamaños, cantidades", "Informar al cliente sobre la compra",]);
opciones.push(["Beneficios", "Promoción", "Descuentos", "Rebajas",]);
opciones.push(["Adiós", "Bye, hasta luego", "Esperamos tenerlo de vuelta", "Colgar",]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el momento 
let cantidadAcertadas = 0;

function ComenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    } 
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

function ComprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acerto
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agregamos las clases para colocar en rojo elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,600);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

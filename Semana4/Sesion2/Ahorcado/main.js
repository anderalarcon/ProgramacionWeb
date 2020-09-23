var FRASES = [
  "AL QUE MADRUGA DIOS LE AYUDA",
  "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
];

var refranSeleccionado = null;
var refranOculto = null;
var contadorErrores = 0;

var ocultar = function (refran) {
  //hacemos las lineas
  var refranoculto = "";
  for (var i of refran) {
    //Bota las letras altok ; x cada letra
    if (i != " ") {
      refranoculto += "_";
    } else {
      refranoculto = refranoculto + " ";
    }
  }
  return refranoculto;
};

var mostrarrefranoculto = function (refran) {
  // document.querySelector("#refran").innerHTML=refran; con #
  document.querySelector("#refran").innerHTML = refran;
};

var verificarcaracterenrefran = function (caracter, refran) {
  for (var c of refran) {
    if (c == caracter) {
      return true;
    }
  }
  return false; //si termina de recorrer y no encuentra
};

var descubrircaracterenrefran = function (c, refranselec, refranocul) {
  var refran = "";
  for (var i in refranselec) {
    if (c == refranselec[i]) {
      refran += c;
    } else {
      refran += refranocul[i];
    }
  }
  return refran;
};

var verificarganador = function () {
  return refranOculto == refranSeleccionado; //devuelve true o false
};

var mostrarmensaje = function () {
  //ganador
  document.getElementById("msjganador").className = "visible"; //clase en css
  document.getElementById("msjperdedor").className = "oculto";
};

var actualizarImagen = function () {
  document
    .querySelector("#imagen")
    .setAttribute("src", "imagenes/Hangman-" + ++contadorErrores + ".png");

  //++a -> antes aumenta  a++ -> ejecuta y luego aumenta 1
};

var verificarperdedor = function () {
  return contadorErrores >= 6; //boleano si se cumple devuevle true ,sino false
};

var mostrarmsjperdedor = function () {
  document.getElementById("msjganador").className = "oculto"; //clase en css
  document.getElementById("msjperdedor").className = "visible";
};

var teclaapretada = function (evt) {
  var caracter = evt.key.toUpperCase(); //almacena las letras

  var estaEnrefran = verificarcaracterenrefran(caracter, refranSeleccionado);

  if (estaEnrefran) {
    refranOculto = descubrircaracterenrefran(
      caracter,
      refranSeleccionado,
      refranOculto
    );
    mostrarrefranoculto(refranOculto);
    var hayGanador = verificarganador();

    if (hayGanador) {
      mostrarmensaje();
    }
  } else {
    actualizarImagen();
    var perdio = verificarperdedor();
    if (perdio) {
      mostrarmsjperdedor();
    }
  }
};

var setearlistener = function () {
  document
    .querySelector("#caracteres_repetidos")
    .addEventListener("keypress", teclaapretada);
};

var main = function () {
  /*
    1.Elegir un refran
    2.Ocultar el refran
    3.Setear un listener que reaccione al presionado de una tecla
        3.1Verificar que la letra presionada esta dentro del refran
        3.2Caso en que si este : Descubrir letra seleccionada en refran
            3.2.1 Si hay ganador : Descubrir msj correcto
        3.3Caso que no este : Actualizar la imagen y el contador de errores
            3.3.1 Verificar si perdio : Mostrar msj
        3.4Concatenar letra en caja de texto


    */

  refranSeleccionado = FRASES[0];
  refranOculto = ocultar(refranSeleccionado);
  mostrarrefranoculto(refranOculto);
  setearlistener();
};

window.addEventListener("load", main);

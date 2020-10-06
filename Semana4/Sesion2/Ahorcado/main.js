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
    if (i != " ") {
      refranoculto += "_";
    } else {
      refranoculto = refranoculto + " ";
    }
  }
  return refranoculto;//__ __
};

var mostrarrefranoculto = function (refran) {
  var a =document.querySelector("#refran").innerHTML = refran;//imprime las lineas del refran con espaciado y todo //__ __
};

var verificarcaracterenrefran = function (caracter, refran) {//(a , aa bb)
  for (var c of refran) {
    if (c == caracter) {
      return true;
    }
  }
  return false; //si termina de recorrer y no encuentra
};

var descubrircaracterenrefran = function (c, refranselec, refranocul) {//a,aa bb,null
  var refran = "";
  for (var i in refranselec) {
    if (c == refranselec[i]) {//aabb
      refran += c;//si encuntra rellena aa __

    } else {
      refran += refranocul[i];//no hace nada ps no escribe

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
    refranOculto = descubrircaracterenrefran(caracter,refranSeleccionado,refranOculto);// retorna aa bb
    mostrarrefranoculto(refranOculto);// si acierto todo mostraria aa bb
    var hayGanador = verificarganador();/// aa bb = aa bb

    if (hayGanador) {
      mostrarmensaje();//4444
    }
  } else {
    actualizarImagen();
    var perdio = verificarperdedor();////3333
    if (perdio) {
      mostrarmsjperdedor();///4444
    }
  }
};

var setearlistener = function () {
  document.querySelector("#caracteres_repetidos").addEventListener("keypress", teclaapretada);
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
  refranOculto = ocultar(refranSeleccionado);//__ __
  mostrarrefranoculto(refranOculto);
  setearlistener();
};

window.addEventListener("load", main);

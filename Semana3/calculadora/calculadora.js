var enOperacion = "";
var numeroAlmacenado = 0;
var borrar = false;
var ope="";

function botonDigitoOnClick(evt) { //recibe como parametro un evento . Y con ese evento obtengo donde se relizo el evento
    // digito es un int y esta definido ya en html ; numero es un string 
    var digito = parseInt(evt.target.innerHTML);//retorna el numero a apretar
    var inputNumeros = document.getElementById("numeros"); //chapamos la cajita

    var numero = inputNumeros.value; //el valor que esta en el input auxiliar  y para almacenar cacda vez 
    if (numero == "0" || borrar == true) { //como es true y apretare un digito chanca
        inputNumeros.value = digito; //para que borre el 0 inicial
        borrar = false; //para que al apretar + y un digito diferente se borre el anterior y ponga el apretado
    } else {
        if(ope=="suma"){
        inputNumeros.value = numero + digito; //int + string se concatena sin problemas 
        }
        else if(ope=="*"){
            inputNumeros.value=numero*digito;
        }else if(ope=="-"){
            inputNumeros.value=numero-digito;
        }else if(ope=="/"){
            inputNumeros.value=numero/digito;

        };

    }
};


var botonOperacionOnClick = function() { //otra manera de definir pero es lo misma mierda 
    var operacion = this.innerHTML //referencia al objeto al cual a sucedido el evento osea a los + - * / (la operaciona a apretar)
    if (operacion == "+") {
        var inputNumeros = document.getElementById("numeros");
        var numero = inputNumeros.value;
        if (enOperacion == "") {
            enOperacion = "+";
            numeroAlmacenado = parseInt(numero); //numero almacenado es un int y numero es string
        } else {
            var resultado = numeroAlmacenado + parseInt(numero);
            inputNumeros.value = resultado;

        }
        ope="suma";
        borrar = true;
    } else if (operacion == "=") {
        var inputNumeros = document.getElementById("numeros");
        var numero = inputNumeros.value;
        var resultado = numeroAlmacenado + parseInt(numero); //numero almacenado xq antes de dar igual tendria que darle click a alguna operacion
        inputNumeros.value = resultado;
        enOperacion = "";
        numeroAlmacenado = 0;
        borrar = true;

    } else if (operacion == "C") {
        var inputNumeros = document.getElementById("numeros");
        var numero = inputNumeros.value;
        inputNumeros.value = 0;
        enOperacion = "";
        numeroAlmacenado = 0;
        borrar = false;
        numero = "0";

    } else if (operacion == "*") {
        var inputNumeros = document.getElementById("numeros");
        var numero = inputNumeros.value;
        if (enOperacion == "") {
            enOperacion = "*";
            numeroAlmacenado = parseInt(numero);
        } else {
            var resultado = numeroAlmacenado * parseInt(numero);
            inputNumeros.value = resultado;
        }
        ope="*";
        borrar = true;
    }else if (operacion=="-"){
        var inputNumeros = document.getElementById("numeros");
        var numero = inputNumeros.value;
        if (enOperacion == "") {
            enOperacion = "-";
            numeroAlmacenado = parseInt(numero);
        } else {
            var resultado = numeroAlmacenado - parseInt(numero);
            inputNumeros.value = resultado;
        }
        ope="-";
        borrar = true;

    }else if(operacion=="/"){
        var inputNumeros = document.getElementById("numeros");
        var numero = inputNumeros.value;
        if (enOperacion == "") {
            enOperacion = "/";
            numeroAlmacenado = parseInt(numero);
        } else {
            var resultado = numeroAlmacenado / parseInt(numero);
            inputNumeros.value = resultado;
        }
        ope="/";
        borrar = true;
    }
}


var main = function() { //para funciones concatenadas
    //configurando botones de digito
    for (var i = 0; i < 10; i++) {
        var but = document.getElementById("bot" + i);
        but.addEventListener("click", botonDigitoOnClick); //"clicl al hacer click"

    }

    //configurando botones de operaciones

    document.getElementById("botsuma").addEventListener("click", botonOperacionOnClick);
    document.getElementById("botigual").addEventListener("click", botonOperacionOnClick);
    document.getElementById("botonC").addEventListener("click", botonOperacionOnClick);
    document.getElementById("boton*").addEventListener("click", botonOperacionOnClick);
    document.getElementById("botresta").addEventListener("click", botonOperacionOnClick);
    document.getElementById("boton/").addEventListener("click", botonOperacionOnClick);


};

window.addEventListener("load", main); //cuando cargue la ventana se va a ejecutar la funcion main
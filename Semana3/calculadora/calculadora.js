
var enOperacion="";
var numeroAlmacenado=0;
var borrar=false;

function botonDigitoOnClick(evt){//al hacer click va realizar esta funcion en html 
    // digito es un int y esta definido ya en html ; numero es un string 
    var digito=parseInt( evt.target.innerHTML);
    var inputNumeros=document.getElementById("numeros");//chapamos x id 

    var numero=inputNumeros.value;//el valor que esta en el input auxiliar  y para almacenar cacda vez 
    if(numero=="0" || borrar==true){
        inputNumeros.value=digito;//para que borre el 0 inicial
        borrar=false;
    }else{
        inputNumeros.value=numero+digito;//int + string se concatena sin problemas 

    }
};


var botonOperacionOnClick=function(){
    var operacion=this.innerHTML//referencia al objeto al cual a sucedido el evento
    if(operacion=="+"){
        var inputNumeros=document.getElementById("numeros");
        var numero=inputNumeros.value;
        if(enOperacion==""){
            enOperacion="+";
            numeroAlmacenado=parseInt(numero);//numero almacenado es un int y numero es string
        }else{
           var resultado= numeroAlmacenado+parseInt(numero);
           inputNumeros.value=resultado;

        }
        borrar=true;
    }else if(operacion=="=") {
        var inputNumeros=document.getElementById("numeros");
        var numero=inputNumeros.value;
        var resultado= numeroAlmacenado+parseInt(numero);
        inputNumeros.value=resultado;
        enOperacion="";
        numeroAlmacenado=0;
        borrar=true;
    }else if (operacion=="C"){
        var inputNumeros=document.getElementById("numeros");
        var numero=inputNumeros.value;
        inputNumeros.value=0
        enOperacion="";
        numeroAlmacenado=0;
        borrar=false;
        numero="0";
    }
};



//hola
/*var main=function(){
    for(var i =0;i<10;i++){
        document.getElementById("bot"+i).onclick=botonDigitoOnClick;
    }//no esta ejecutando ,le esta asignando al atributo onclick. Recien se ejecta cuando alguien le da click al boton
    
};*/

//window.onload=main;//asi lo hace el profe para que al cargar ya este todo ok

var main=function(){//otra forma de realizarlo
    //configurando botones de digito
    for(var i =0;i<10;i++){
        var but=document.getElementById("bot"+i);
        but.addEventListener("click",botonDigitoOnClick);
        but.addEventListener("click",function(){
            console.log("Se hizo click en boton");
            console.log(this);
        });
    }
    //configurando botones de operaciones

    document.getElementById("botsuma").addEventListener("click",botonOperacionOnClick);
    document.getElementById("botigual").addEventListener("click",botonOperacionOnClick);
    document.getElementById("botonC").addEventListener("click",botonOperacionOnClick);




    
};

window.onload=main;
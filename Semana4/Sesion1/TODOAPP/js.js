var obtenerTODO=function(){
    var input=document.getElementById("todo");
   var todo=input.value; 
  //  var todo=input.getAttribute("value");//lo mismo
    return todo;
};

var agregarTODO=function(todo){
    var listaul=document.getElementById("lista");
    var nuevoli=document.createElement("li");//creamos un elemento nuevo para ir agregar al darle click
    nuevoli.setAttribute("class","list-group-item");//a ese nuevo elemetno le ponemos bootstrap .
    nuevoli.innerText=todo;//le asignamos un texto
    listaul.appendChild(nuevoli);//le agregamos un hijo a la lista

    var input2=document.getElementById("todo");
    input2.value="";

};

var limpiarTODO=function(){

    document.getElementById("lista").innerHTML="";//limpiamos la lista
};

var agregarconenter=function(evt){

    if(evt.keyCode==13){//hubo enter
        var todo=obtenerTODO();
        agregarTODO(todo);
    }

}



var agregarTODOONclick=function(){

//1.obtenemos lo que se ecscribio
var todo=obtenerTODO();//llamamos a funcion
console.log(todo);

//2.agregar a la lista
agregarTODO(todo);//llamamos a funcion

var limpiar=document.getElementById("butALimpiar");
limpiar.addEventListener("click",limpiarTODO);


};





var main=function(){
   var but= document.getElementById("butAgregarTODO");//configramos el boton al hacer click
   but.addEventListener("click",agregarTODOONclick);//le asignamos una funcion
   window.addEventListener("keypress",agregarconenter);//enter ecole

};

window.addEventListener("load",main);
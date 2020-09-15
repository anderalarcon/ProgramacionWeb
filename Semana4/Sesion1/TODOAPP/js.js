var obtenerTODO=function(){
    var input=document.getElementById("todo");
   var todo=input.value; 
  //  var todo=input.getAttribute("value");//lo mismo
    return todo;
};

var agregarTODO=function(todo){
    var listaul=document.getElementById("lista");
    var nuevoli=document.createElement("li");//creamos un elemento nuevo para ir agregar al darle click
    nuevoli.setAttribute("class","list-group-item");//setear clase para que sea bootstrap cada vez que doy click crea cuadradito
    nuevoli.innerText=todo;//le asignamos un texto
    listaul.appendChild(nuevoli);//le agregamos un hijo a la lista

    var input2=document.getElementById("todo");
    input2.value="";

};

var limpiarTODO=function(){

    document.getElementById("lista").innerHTML="";
};

var agregarconenter=function(evt){

    if(evt.keyCode==13){//hubo enter
        var todo=obtenerTODO();
        agregarTODO(todo);
    }

}



var agregarTODOONclick=function(){

//1.obtenemos lo que se ecscribio
var todo=obtenerTODO();
console.log(todo);

//2.agregar a la lista
agregarTODO(todo);

var limpiar=document.getElementById("butALimpiar");
limpiar.addEventListener("click",limpiarTODO);


};





var main=function(){
   var but= document.getElementById("butAgregarTODO");
   but.addEventListener("click",agregarTODOONclick);
   window.addEventListener("keypress",agregarconenter);

};

window.addEventListener("load",main);
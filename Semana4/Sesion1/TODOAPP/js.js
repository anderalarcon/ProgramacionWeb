var contadorTODOS = 0;

var obtenerTODO = function () {
  var input = document.getElementById("todo");
  var todo = input.value;
  //  var todo=input.getAttribute("value");//lo mismo
  return todo;
};

var agregarTODOPILA = function () {
  var listaul = document.getElementById("lista");
  var nuevoli = document.createElement("li");
};

var agregarTODO = function (todo) {
  var listaul = document.getElementById("lista");
  var nuevoli = document.createElement("li"); //creamos un elemento nuevo para ir agregar al darle click

  nuevoli.id = "todo_" + contadorTODOS++; //comienza en 0 y se va incrementando . Si lo pongo antes primero se evalua
  nuevoli.setAttribute("class", "list-group-item todo"); //a ese nuevo elemetno le ponemos bootstrap .
  nuevoli.innerText = todo; //le asignamos un texto
  nuevoli.addEventListener("click",Todoonclick);
  listaul.appendChild(nuevoli); //le agregamos un hijo a la lista

  var input2 = document.getElementById("todo");
  input2.value = "";
};

var limpiarTODO = function () {
  document.getElementById("lista").innerHTML = ""; //limpiamos la lista
};

var agregarconenter = function (evt) {
  if (evt.keyCode == 13) {
    //hubo enter
    var todo = obtenerTODO();
    agregarTODO(todo);
  }
};

var agregarTODOONclick = function () {
  //1.obtenemos lo que se ecscribio
  var todo = obtenerTODO(); //llamamos a funcion
  console.log(todo);

  //2.agregar a la lista
  agregarTODO(todo); //llamamos a funcion
};

var Todoonclick = function () {//eliminar al hacer click
  this.remove();//chapa al li y lo borra

};




var main = function () {
  var but = document.getElementById("butAgregarTODO"); //configramos el boton al hacer click
  but.addEventListener("click", agregarTODOONclick); //le asignamos una funcion

  var limpiar = document.getElementById("butALimpiar");
  limpiar.addEventListener("click", limpiarTODO);

  /*var arrTODOS=document.querySelectorAll(".todo");//busco a los elementos que tenga ese id
  for (var i=0;i<arrTODOS.length;i++){
      arrTODOS[i].addEventListener("click",Todoonclick);
  }*/

  window.addEventListener("keypress", agregarconenter); //enter ecole
};

window.addEventListener("load", main);

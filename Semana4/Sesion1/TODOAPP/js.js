var contadorTODOS = 0;

var obtenerTODO = function () {
  var input = document.getElementById("todo");
  var todo = input.value;
  return todo;
};

var agregarTODO = function (todo) {
  var listaul = document.getElementById("lista");
  var nuevoli = document.createElement("li"); //creamos un elemento nuevo para ir agregar al darle click

  nuevoli.id = "todo_" + contadorTODOS++; //comienza en 0 y se va incrementando . Si lo pongo antes primero se evalua
  nuevoli.setAttribute("class", "list-group-item todo"); 
  nuevoli.innerText = todo; 
  listaul.appendChild(nuevoli); //le agregamos un hijo a la lista

  nuevoli.addEventListener("click",Todoonclick);//al acerle click al elemento se elimina

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
  var todo = obtenerTODO(); 
  console.log(todo);

  //2.agregar a la lista
  agregarTODO(todo);
};

var Todoonclick = function () {
  this.remove();//chapa al li y lo borra
};




var main = function () {
   document.getElementById("butAgregarTODO").addEventListener("click", agregarTODOONclick); //configramos el boton al hacer click

  document.getElementById("butALimpiar").addEventListener("click", limpiarTODO);

  window.addEventListener("keypress", agregarconenter); //enter 
};

window.addEventListener("load", main);

var callback = function (evt) {
  var req=evt.target;
  if(req.readyState=4){//en asincrono | cuando termina la peticion ahi recien pregunto 
      if(req.status=200){
          //peticion correcta
          var listaAlumnos=JSON.parse(req.responseText);
          for(var i =0;i<listaAlumnos.length;i++){
              console.log(listaAlumnos[i].codigo + " " + listaAlumnos[i].nota);
          }
      }else{
          //manejo de errores
          console.error("Hubo un error en la peticion");
      }
}};

var peticionSincrona = function () {
  var req = new XMLHttpRequest();
  req.open("GET", "https://api.jsonbin.io/b/5f72740e7243cd7e8245db83/1", false); //configure mi canal de comunicacion FALSE -> SINCRONA

  req.send(null);
  if (req.status == 200) {
    //codigo correcto
    var respuesta = req.responseText; //el msj del profe
    var resp = JSON.parse(respuesta);
    console.log(respuesta); //en json

    for (var i = 0; i < resp.length; i++) {
      console.log(resp[i].codigo + " " + resp[i].nota);
    }
  }
}











var peticionAsincrona = function () {

  var req = new XMLHttpRequest();
  req.open("GET", "https://api.jsonbin.io/b/5f72740e7243cd7e8245db83/1", true); //asincrona
  req.onreadystatechange = callback; //definir funcion callback
  req.send(null);

};

var main = function () {
  peticionAsincrona();
};

window.addEventListener("load", main);

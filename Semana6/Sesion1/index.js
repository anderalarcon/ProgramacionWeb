
var URL="https://api.jsonbin.io/b/5f72740e7243cd7e8245db83/2";
//"https://api.jsonbin.io/b/5f72740e7243cd7e8245db83/2"
//QUE MUESTRE UNA ALERTA EN VEZ DE UNDEFAINED CUANDO NO HAY IFNORMACION
var agregarAlumno=function(alumno){

    console.log(alumno);
    var body=document.getElementById("data_alumnos");

    var nuevoAlumnoTR=document.createElement("tr");
    var codigoTD=document.createElement("td");
    var nombreTD=document.createElement("td");
    var notaTD=document.createElement("td");
    codigoTD.setAttribute("scope","row");
    codigoTD.innerHTML=alumno.codigo;
    nombreTD.innerHTML=alumno.nombre;
    notaTD.innerHTML=alumno.nota;

    nuevoAlumnoTR.appendChild(codigoTD);
    nuevoAlumnoTR.appendChild(nombreTD);
    nuevoAlumnoTR.appendChild(notaTD);
    
    body.appendChild(nuevoAlumnoTR);//primero crear el elemento a agregar
}



var callback = function (evt) {
    var req=evt.target;
    if(req.readyState==4){//en asincrono | cuando termina la peticion ahi recien pregunto 
        if(req.status==200){
            //peticion correcta
            console.log(req.responseText)
            var listaAlumnos=JSON.parse(req.responseText);
            for(var i =0;i<listaAlumnos.length;i++){
                agregarAlumno(listaAlumnos[i]);

            }
        }else{
            //manejo de errores
            console.error("Hubo un error en la peticion");
        }
  }};
  
  var peticionSincrona = function () {
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.jsonbin.io/b/5f72740e7243cd7e8245db83/2", false); //configure mi canal de comunicacion FALSE -> SINCRONA
  
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
    req.open("GET", URL, true); //asincrona
    req.onreadystatechange = callback; //definir funcion callback
    req.send(null);
  
  };
  
  var main = function () {
    peticionAsincrona();
  };
  
  window.addEventListener("load", main);
  
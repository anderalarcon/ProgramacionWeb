
const URL_BACKEND="https://script.google.com/macros/s/AKfycbxA2iW6e4f8IMlrIHIG_s1aRYDZDkhuKX1oKFARFFGe1du3fDM/exec";

var crearCard=function(videoJuego){//recibe un objeto que representa a un videojuego
        var divCard=document.createElement("div");//creamos cada elemento DOM 
        divCard.setAttribute("class","card videojuego");

        var Img=document.createElement("img");
        Img.setAttribute("class","card-img-top rounded imagen_perfil");
        Img.setAttribute("src","http://img.unocero.com/2020/09/among-us-2-cancelado-1200x600.jpg");

        var divBody=document.createElement("div");
        divBody.setAttribute("class","card-body");

        var divTitle=document.createElement("div");
        divTitle.setAttribute("class","card-title");

        var divText=document.createElement("div");
        divText.setAttribute("class","card-text");

        var h2Nombre=document.createElement("h2");
        h2Nombre.innerHTML=videoJuego.nombre;

        var h5Categorio=document.createElement("h5");
        h5Categorio.innerHTML=videoJuego.categoria;

        var h5Ranking=document.createElement("h5");
        h5Ranking.innerHTML=videoJuego.ranking;

        // Ahora falta relacionar 

        divText.appendChild(h5Categorio);
        divText.appendChild(h5Ranking);

        divTitle.appendChild(h2Nombre);

        divBody.appendChild(divTitle);//en orden igual que la card
        
        divBody.appendChild(divText);

        divCard.appendChild(Img);
        
        divCard.appendChild(divBody);//siempre acabara con la principal 

        return divCard;//retorna un card creado con los datos del backend csm 
}

var mostrarVideojuegos=function(ListaVideojuegos){

    var divData=document.getElementById("data");
            for(var videojuego of ListaVideojuegos){//recorremos el arreglo del backend
                console.log(videojuego);
                var divcard=crearCard(videojuego);
                divData.appendChild(divcard);
            }

}

var obtenerJuegos = function (evt) {
    var req=evt.target;
    if(req.readyState==4){//en asincrono | cuando termina la peticion ahi recien pregunto 
        if(req.status==200){ //peticion correcta Se entrego exitosamente lista de Juegos 
            var listaJuegos=JSON.parse(req.responseText);//ya tenemos en tipo objeto
            mostrarVideojuegos(listaJuegos);
        }else{
            //manejo de errores
            console.error("Hubo un error en la peticion");
        }
  }};

var obtenerListadoJuegosHTTP=function(){
    //llamada remota a backend
    var req = new XMLHttpRequest();
    req.open("GET", URL_BACKEND, true); //solo pido datos "GET"
    req.onreadystatechange = obtenerJuegos; //definir funcion callback para que se ejecute cunado devuelva
    req.send(null);
}

var configurarBtnNuevo=function(){
    document.getElementById("btnNuevo").addEventListener("click",function(){//funcion annma
            location.href="videojuegos_edit.html";//para que se abra una nueva pantalla 
    })


}


var main=function(){
    //1.Hacer una llamada remota al bakcend para pedir el listado de juegos
    window.addEventListener("load",obtenerListadoJuegosHTTP);
    //2 . Setear un eveneto para el boton nuevo que dirija a la pagian de registro
    configurarBtnNuevo();
};

main();
const CATEGORIAS_URL_BACKEND = "https://script.google.com/macros/s/AKfycbxA2iW6e4f8IMlrIHIG_s1aRYDZDkhuKX1oKFARFFGe1du3fDM/exec?entity=categorias";//url de categorias 

const URL_BACKEND2="https://script.google.com/macros/s/AKfycbxA2iW6e4f8IMlrIHIG_s1aRYDZDkhuKX1oKFARFFGe1du3fDM/exec";



var configRegresar = function () {
    document.getElementById("btnRegresar").addEventListener("click",function(){
        location.href="videojuegos.html";
    });
};

var crearOptionCat=function(CatObtenida){
    
    var Option=document.createElement("option");
    Option.setAttribute("value",CatObtenida.id);

    Option.innerHTML=CatObtenida.nombre;

    return Option;
}

var onCategorias=function(evt){
    if(evt.target.readyState==4){
        if(evt.target.status==200){
            var categoriasJSON=JSON.parse(evt.target.responseText);
            console.log(categoriasJSON);
            var select=document.getElementById("videojuego_categoria");
            for(var categoria of categoriasJSON){//asi es una forma u otra hacer una funcion
                var option=crearOptionCat(categoria);
                select.appendChild(option);

            }
        }else{
            console.log("Hubo un error ctmre");
        }
    }

}

var configCombo = function () {
    var req= new XMLHttpRequest();
    req.open("GET",CATEGORIAS_URL_BACKEND,true);
    req.onreadystatechange=onCategorias;
    req.send(null);

};

var guardarVideojuegoOnClick=function(){
    /*
    {
        "id":6,
        "nombre":"",
        "categoria":2,
        "consolas":"",
        "desarrollador":"",
        "ranking":3.4
    }

    */
    //0Validar que los campos tengang valores correctos (falta)
    //1.Obtener los datos del formulario y crear el objeto a enviar 
    var vj={
        id:document.getElementById("videojuego_id").value,
        nombre:document.getElementById("videojuego_nombre").value,
        categoria:document.getElementById("videojuego_categoria").value,
        consolas:document.getElementById("videojuego_consolas").value,
        desarrollador:document.getElementById("videojuego_desarrollador").value,
        ranking:document.getElementById("videojuego_ranking").value,

    };

    var req=new XMLHttpRequest();
    req.open("POST",URL_BACKEND2,true);//vamos a enviar datos 
    req.onreadystatechange=function(){
        if(req.readyState==4){
            if(req.status==200){
                console.log("Se guardo correctamente")
            }else{
                console.log("Error en guardar videojuego")
            }
        }
    };
    req.send(JSON.stringify(vj));//ahora si enviamos datos al servidor pero tenemos que pasarlo a JSON
}

var configGuardar = function () {
    document.getElementById("btnGuardar").addEventListener("click",guardarVideojuegoOnClick)
};



var main = function () {
  //0.Cargar el combo de categoria
  configCombo();
  //1.Configurar boton guardar
  configGuardar();
  //2.Configurar boton regresar
  configRegresar();
};

main();

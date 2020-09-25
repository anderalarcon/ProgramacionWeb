var main=function(){
    var persona={//si es asi no este entre comillas
        nombre:"Billy",
        edad:35
    };

    //objeto js -> cadena json
    var personaJSON=JSON.stringify(persona);
    console.log(personaJSON);
    console.log(persona);
    //cadena json -> objeto js
    //siempre en linea 
    var perJSON=JSON.parse('{"nombre" :"Billy","edad":35,"casado":true,"peso":100}');
    console.log("perJSON",perJSON);

};

window.addEventListener("load",main);
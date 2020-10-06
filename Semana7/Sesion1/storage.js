var main=function(){

    var nombre=localStorage.getItem("TEXTO_EJEMPLO");
    //localStorage.removeItem() -> para borrar explicitamente
    if(nombre!=null){//si ya se habia ingresado aparecera defrente
        document.getElementById("texto").value=nombre;
   }

    document.getElementById("butGuardar").addEventListener("click",function(){
        var texto=document.getElementById("texto");
        localStorage.setItem("TEXTO_EJEMPLO",texto.value);
        console.log(texto.value)
    })
    
}

window.addEventListener("load",main);
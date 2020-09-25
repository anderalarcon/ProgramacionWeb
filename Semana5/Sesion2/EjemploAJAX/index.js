var callback=function(){
};

var main=function(){

    var req=new XMLHttpRequest();
    req.open("GET","http://www.google.com",false);//configure mi canal de comunicacion

    req.send();
    if(req.status==200){
        console.log(req.responseText);
    }
};

window.addEventListener("load",main);
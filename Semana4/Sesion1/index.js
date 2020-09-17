var main=function(){
    console.log(document.body.getAttribute("id"));//para obtener id 
    console.log(document.body.parentNode);//muestra todo el html
    console.log(document.body.childNodes);//el tipo de cada uno
    console.log(document.body.firstElementChild.innerHTML);//todo lo del primero elemetno (p)
    console.log(document.firstElementChild.innerText);//los textos del primer elemento(p)

 

};

window.addEventListener("load",main);
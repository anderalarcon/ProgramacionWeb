var main=function(){
    console.log(document.body.getAttribute("id"));//para obtener id 
    console.log(document.body.parentNode);
    console.log(document.body.childNodes);
    console.log(document.body.firstElementChild.innerHTML);
    console.log(document.firstElementChild.innerText);
};

window.addEventListener("load",main);

var list=document.getElementsByClassName("list-group-item")[0];
var klik=document.getElementById("dropdownMenuButton");
var ul=document.getElementsByClassName("list-group")[0];
var open=false;

document.onclick = function(event){
    if(!open){
        ul.style.display="inline";
        open = true;
    }
    else{
        ul.style.display="none";
        open=false;

    }
}

function myFunc(element){
    console.log(element);
     klik.innerText=element.innerText;
    
}







    




    var element_list=document.getElementsByClassName("list-group-item");


function myFunction(event){
    console.log(event);
    for(var i=0; i<element_list.length; i++){
        element_list[i].style.backgroundColor="white";
        event.style.backgroundColor="yellow";
    }
}




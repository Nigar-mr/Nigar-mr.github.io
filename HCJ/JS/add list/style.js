
var element_list = document.getElementsByClassName("list-group")[0];
var ul = document.getElementsByTagName("ul")[0];
var input = document.getElementsByTagName("input")[0];
var deleteElement;
var renameElement;
var li = document.getElementsByClassName("list-group-item")[0];


function myFunction(element) {
    for (var i = 0; i < element_list.length; i++) {
        // element_list[i].style.backgroundColor = "red";
        // element.style.backgroundColor = "blue";
        console.log(element);
    }
}

function make_li_element(text) {
    return "<li class=\"list-group-item\"> " + text + " </li>";
}

document.onkeypress = function (event) {
    if (event.key === "Enter") {
        var bosluq = input.value.trim()
        if (bosluq.length != "") {
            var text = input.value;
            input.value = "";
            ul.innerHTML += make_li_element(text);
        }
        else {
            input.value = "";
        }
    }
}


document.onclick = function (event) {
    if (event.target.tagName == "LI") {
        deleteElement = event.target;
        renameElement = event.target;
    }
    else if (event.target.id === "delete") {
        if (deleteElement) {
            deleteElement.remove();
        }
    }
    else if (event.target.id === "rename") {
        if (renameElement) {
            rename(renameElement);
        }
    
    // if (event.key === "Enter") {
    //         var second = document.getElementsByClassName("form-control")[0];
    //         if(second.value!=li.value){
    //         li.innerText=second.value.innerText;
    //         }
    //     }
        }
    }
    


function rename(element) {
    var old_text = element.innerText;
    element.innerHTML = "<input type=\"text\" class=\"form-control\" value=\"" + old_text + "\"/>";
    console.log(element);
    document.onchange=function(el){
        var second = document.getElementsByClassName("form-control")[0];
        if(el.key=="Enter"){
            
li.innerText.value=el.innerText;
console.log(el);
        }
    }
}







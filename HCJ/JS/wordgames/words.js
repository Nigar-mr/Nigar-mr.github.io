
var words = ["car", "cat", "red"];

var success = document.getElementsByClassName("successText")[0];
var error = document.getElementsByClassName("errorText")[0];
var input = document.getElementsByClassName("input")[0];

function keydown() {
    console.log("keydown");
}

// document.onkeydown = function (event) {
//     console.log("event", event.key);
// }

function wordgames() {
    var includes = false;
    for (var i = 0; i < words.length; i++) {
        if (input.value==(words[i])) {
            includes=true;
            return;
        }

    }
    if(includes===true){
        console.log("True");
        }
        else {
            // error.innerHTML="Wrong!";
            console.log("Wrong!");
        }

    }

    wordgames();



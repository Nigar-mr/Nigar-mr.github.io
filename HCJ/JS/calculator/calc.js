
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var vurma = document.getElementById("vur");
var bolme = document.getElementById("bol");
var menfi = document.getElementById("plus-minus");
var percent = document.getElementById("percent");
var restart = document.getElementById("restart");
var result = document.getElementById("result");
var dot = document.getElementById("dot");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var answer = document.getElementById("answer");
var symbol = document.getElementById("symbol");
var number = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];

document.onclick = function (element) {
    console.log(element);

}
one.addEventListener("click", function (event) {
    input1.value += "1";
})
two.addEventListener("click", function (event) {
    input1.value += "2";
})
three.addEventListener("click", function (event) {
    input1.value += "3";
})
four.addEventListener("click", function (event) {
    input1.value += "4";
})
five.addEventListener("click", function (event) {
    input1.value += "5";
})
six.addEventListener("click", function (event) {
    input1.value += "6";
})
seven.addEventListener("click", function (event) {
    input1.value += "7";
})
eight.addEventListener("click", function (event) {
    input1.value += "8";
})
nine.addEventListener("click", function (event) {
    input1.value += "9";
})
zero.addEventListener("click", function (event) {
    input1.value += "0";
})

plus.addEventListener("click", function(event){
    symbol.value+="+";
})
minus.addEventListener("click", function(event){
    symbol.value+="-";
})
vurma.addEventListener("click", function(event){
    symbol.value+="*";
})
bolme.addEventListener("click", function(event){
    symbol.value+="/";
})
percent.addEventListener("click", function(event){
    symbol.value+="%";
})


 if(symbol.value!=0){
    one.addEventListener("click", function (event) {
        input2.value += "1";
    })
    two.addEventListener("click", function (event) {
        input2.value += "2";
    })
    three.addEventListener("click", function (event) {
        input2.value += "3";
    })
    four.addEventListener("click", function (event) {
        input2.value += "4";
    })
    five.addEventListener("click", function (event) {
        input2.value += "5";
    })
    six.addEventListener("click", function (event) {
        input2.value += "6";
    })
    seven.addEventListener("click", function (event) {
        input2.value += "7";
    })
    eight.addEventListener("click", function (event) {
        input2.value += "8";
    })
    nine.addEventListener("click", function (event) {
        input2.value += "9";
    })
    zero.addEventListener("click", function (event) {
        input2.value += "0";
    }) 
}






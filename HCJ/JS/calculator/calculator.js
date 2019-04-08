
var topla = document.getElementsByClassName("plus")[0];
var cix = document.getElementsByClassName("minus")[0];
var vurma = document.getElementsByClassName("vur")[0];
var bolme = document.getElementsByClassName("bol")[0];
var menfi = document.getElementsByClassName("plus-minus")[0];
var faiz = document.getElementsByClassName("percent")[0];
var sil = document.getElementsByClassName("restart")[0];
var element = document.getElementsByClassName("beraber")[0];
var noqte = document.getElementsByClassName("dot")[0];
var bir = document.getElementsByClassName("one")[0];
var iki = document.getElementsByClassName("two")[0];
var uc = document.getElementsByClassName("three")[0];
var dord = document.getElementsByClassName("four")[0];
var bes = document.getElementsByClassName("five")[0];
var alti = document.getElementsByClassName("six")[0];
var yeddi = document.getElementsByClassName("seven")[0];
var sekkiz = document.getElementsByClassName("eight")[0];
var doqquz = document.getElementsByClassName("nine")[0];
var sifir = document.getElementsByClassName("zero")[0];
var text = document.getElementsByClassName("text")[0];
var type1 = document.getElementsByClassName("type1")[0];
var type2 = document.getElementsByClassName("type2")[0];
var answer = document.getElementById("answer");
var expression = "+";

var number = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero" ];


// function calculate() {
//     var field1=document.getElementById("num1").value;
//     var field2=document.getElementById("num2").value;

//     var result=parseFloat(field1) + parseFloat(field2);
//     if(!isNaN(result)){
//     document.getElementById("answer").innerHTML="" +result; 
//     }

//     }


// function myFunction(id) {
//     // document.inputform.input1.value += id;
//     type1.value +=id;


// }
// function myFunction(id) {
//     // document.inputform.input2.value += id;
// }
// function clearScreen() {
//             // document.inputform.input1.value = "";
//         }

// // bir.addEventListener("click", function(event){
// //     type1.value+="1";

// // })

// iki.addEventListener("click", function(event){
//     type1.value+="2";

// })
// uc.addEventListener("click", function(event){
//     type1.value+="3";

// })
// dord.addEventListener("click", function(event){
//     type1.value+="4";

// })
// bes.addEventListener("click", function(event){
//     type1.value+="5";

// })
// alti.addEventListener("click", function(event){
//     type1.value+="6";

// })
// yeddi.addEventListener("click", function(event){
//     type1.value+="7";

// })
// sekkiz.addEventListener("click", function(event){
//     type1.value+="8";

// })
// doqquz.addEventListener("click", function(event){
//     type1.value+="9";

// })

// sifir.addEventListener("click", function(event){
//     type1.value+="0";

// })

// topla.addEventListener("click", function myFunctionplus() {
//     expression = "+";
//     type1.value += "+";
//     var result = Number(type1.value) + Number(type2.value);
//     text.innerHTML = result;

//      })
    // cix.addEventListener("click", function (event) {
    //     type1.value += "-";

    // })
    // vurma.addEventListener("click", function (event) {
    //     type1.value += "*";

    // })
    // bolme.addEventListener("click", function (event) {
    //     type1.value += "/";

    // })
    // faiz.addEventListener("click", function (event) {
    //     type1.value += "%";

    // })
    // element.addEventListener("click", function (event) {
    //     if (expression === "+") {
    //         var result = type1.value + type2.value;
    //         answer.innerHTML = result;
    //     }
    // })

    // topla.addEventListener("click", function (event) {
    //     // var num1 = document.getElementsByClassName("type1").value;
    //     // var num2 = document.getElementsByClassName("type2").value;

    //     var result =Number(type1.value)+Number(type2.value);
    //     text.innerHTML=result;

    // console.log(result);
    // element.innerHTML = result;
    // document.getElementById("answer").res(); 


    //})


    // cix.addEventListener("click", function (event) {
    //     var num1 = document.getElementsByClassName("type1").value;
    //     var num2 = document.getElementsByClassName("type2").value;

    //     var result = parseFloat(num1) - parseFloat(num2);
    //     console.log(result);
    //     // element.innerHTML = result;
    //     document.getElementById("answer").innerHTML=result; 


    // })
    // vurma.addEventListener("click", function (event) {
    //     var num1 = document.getElementsByClassName("type1").value;
    //     var num2 = document.getElementsByClassName("type2").value;

    //     var result = parseFloat(num1) * parseFloat(num2);

    //     console.log(result);
    //     if(!isNaN(result)){

    //     // element.innerHTML = result;
    //     document.getElementById("answer").innerHTML=result; 

    //     }
    // })
    // bolme.addEventListener("click", function (event) {
    //     var num1 = document.getElementsByClassName("type1").value;
    //     var num2 = document.getElementsByClassName("type2").value;

    //     var result = parseFloat(num1) / parseFloat(num2);
    //     console.log(result);
    //     if(!isNaN(result)){

    //     // element.innerHTML = result;
    //     document.getElementById("answer").innerHTML=result; 

    //     }
    // })
    // faiz.addEventListener("click", function (event) {
    //     var num1 = document.getElementsByClassName("type1").value;

    //     var result = parseFloat(num1) / 100;
    //     console.log(result);
    //     if(!isNaN(result)){

    //     // element.innerHTML = result;
    //     document.getElementById("answer").innerHTML=result; 

    //     }
    // })


    // function myFunction(id) {
    //         document.calc.result.value += id;
    //     }

    //   function clearScreen() {
    //         document.calc.result.value = "";
    //     }
    // function calculate() {
    //         try {
    //             var input = eval(document.calc.result.value);
    //             document.calc.result.value = input;
    //         } catch (err) {
    //             document.calc.result.value = "Error";
    //         }
    //     }


    // function calculate() {
    //     type1.value += "+";

    //     if (onclick === "getOperand('+')") {

    //         result = Number(type1.value) + Number(type2.value);
    //     }
    //     document.getElementById("answer").innerHTML = result;
    //     console.log(result);
    // }

    function myFunctionplus(){

        type1.value += "+";

        if (onclick === "getOperand('+')") {

            result = Number(type1.value) + Number(type2.value);
        }
        document.getElementById("answer").innerHTML = result;
        console.log(result);
}





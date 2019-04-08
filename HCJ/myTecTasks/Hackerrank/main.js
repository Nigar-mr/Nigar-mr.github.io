
function myFunction(){
    var input1=document.getElementsByClassName("input1")[0];
    var input2=document.getElementsByClassName("input2")[0];

    var result = Number(input1.value) + Number(input2.value);

    var answer = document.getElementsByClassName("h1")[0];
    console.log(result)

    answer.innerText = result;

}

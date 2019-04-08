

function topla(){
    var item1 = document.getElementsByClassName("item-1")[0];
    var item2 = document.getElementsByClassName("item-2")[0];

    var result = Number(item1.value) + Number(item2.value);

    var result_element = document.getElementsByClassName("result")[0];

    console.log(result);

    result_element.innerHTML = result;

    return "Click olundu";
}

// var count = 0;

// function increase_number(type){
//     var num_result = document.getElementById("num");


//     if(type==="+"){
//         count ++;
//         num_result.innerHTML = count;
//     }
//     else{
//         if(count !==0) {
//             count --;
//             num_result.innerHTML = count;

//         }
//         if(count !==20){
//             count--;
//             num_result.innerHTML = count;
//             break;
//         }
//     }
// }



// 


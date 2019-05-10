
console.log("yes")

$.ajax({
url:"http://www.mocky.io/v2/5cb88d3d4c00000319d3d647",
method: "GET",
contentType: "aplication/json",
success: function(data){
$(".info").html("<p>" + data.name + "" + data.title + "</p>");
},
error: function (xhr, err, msg) {
    console.log(xhr, err, msg)
}

})
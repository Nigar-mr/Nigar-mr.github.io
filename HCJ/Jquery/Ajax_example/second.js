
var DATA_URL = "https://jsonplaceholder.typicode.com/todos?_limit=50";

function creat_li(title, completed) {
    if (completed) {
        return " <div class='col-12'><div class=\"row\"><ul class=\"list-group\"><li class=\"list-group-item\" style=\"background: green;\"> + title +</li>";
        return li;
    }
    else {
        return " <div class='col-12'><div class=\"row\"><ul class=\"list-group\"><li class=\"list-group-item\" style=\"background: yellow;\"> + title +</li>";
    }
}


$(document).ready(function (e) {
    $.ajax({
        url:DATA_URL,
        method:"GET",
        contentType: "aplication/json",
        success: function (data) {

            var obj = data[0];
            console.log(obj);
            for (var i = 0; i < data.length; i++) {
                $(".list-group").append(creat_li(data[i].title, data[i].completed));
            }

        },
        error: function (error) {
            console.log(error);
        }
    })

});



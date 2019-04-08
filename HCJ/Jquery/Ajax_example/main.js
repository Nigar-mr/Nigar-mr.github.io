var DATA_URL = "https://jsonplaceholder.typicode.com/posts";

function create_card(title, body) {
    var start_text = "<div class='col-4'><div class=\"card\" style=\"width:300px\"><div class=\"card-body\"><h4 class=\"card-title\">";
    var text = title + "</h4><p class=\"card-text\">";
    var end = body + "</p></div></div></div>";
    var result = start_text + text + end;
    console.log(result);
    return result;
}


$(document).ready(function (e) {
    $("button").click(function(e) {
        console.log("click");
        $.ajax({
            url: DATA_URL,
            method: "GET",
            contentType: "application/json",
            success: function(data) {
                var obj = data[0];
                console.log(obj);
                for(var i = 0; i < data.length; i++) {
                    $(".result").append(create_card(data[i].title, data[i].body));
                }
            },
            error: function(error) {
                console.log(error);
            }
        })
    });
});
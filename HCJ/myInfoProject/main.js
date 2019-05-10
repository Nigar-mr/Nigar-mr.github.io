
function creat_card(img, name, text) {
    var card_area = "<div class=\"col-md-4\"><div class=\"card\"style=\"width: 45rem; margin-top: 10px; margin-left: 7px; border: 1px solid black;\"><img class=\"card-img-top\" src=' " + img + " ' alt=\"Card image cap\" style = \"width:120px;height:160px;margin-left:35%;margin-top: 5px;\"><div class=\"card-body\"><h3 class=\"card-title\" style=\"text-align: center;\">";
    var card_name = name + "</h3><p class=\"card-text\" style =\"text-align: center; font-size: 17px;\">";
    var card_text = text + "</p> <a href=\"#\" class=\"btn btn-primary\" style= \"margin-left: 36%; font-size:16px; margin-bottom: 10px; \">Go somewhere</a></div></div></div>";
    var result = card_area + card_name + card_text;
    return result;
}

$(document).ready(function(e){
   
    $.ajax({
        url: "https://fake.munisisazade.com/v1/5cd52e6dfd1d61e440b4cc75",
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
        
                var img = data[i].url;
                var name = data[i].name;
                var text = data[i].title;
                $(".info_az_composer").append(creat_card(img, name, text));
            }
        },
        error: function (xhr, err, msg) {
        }
    })

});

$(document).ready(function(e){
   
    $.ajax({
        url: "https://fake.munisisazade.com/v1/5cd529e3fd1d61e440b4cc1b",
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
        
                var img = data[i].url;
                var name = data[i].name;
                var text = data[i].title;
                $(".info_world_composer").append(creat_card(img, name, text));
            }
        },
        error: function (xhr, err, msg) {
        }
    })

});

$(document).ready(function(e){
   
    $.ajax({
        url: "https://fake.munisisazade.com/v1/5cd53071fd1d61e440b4ccba",
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
        
                var img = data[i].url;
                var name = data[i].name;
                var text = data[i].title;
                $(".info_az_writer").append(creat_card(img, name, text));
            }
        },
        error: function (xhr, err, msg) {
        }
    })

});


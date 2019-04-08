
$(document).ready(function (e) {

  


    $(".p").hide()
    $(".list-group-item").click(function (element) {


        
        $(this).find(".p");
        if ($(this).hasClass("open")) {
            $(this).find(".p").fadeOut();
            $(this).removeClass("open");
            $(this).find(".button").text("+");
        } 
    else {
            $(this).find(".p").fadeIn();
            $(this).addClass("open");
            $(".minus").removeClass();
            $(this).find(".button").text("-");

        }

    })



});
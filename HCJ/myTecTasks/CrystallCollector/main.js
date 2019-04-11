
var num = Math.floor((Math.random() * (12-1) + 1));

var score = 0;
var win = 1;
var losses = 1;
var randomarea = 0;

$("document").ready(function (e) {

    $(".restart").hide();
    $(".play").click(function (e) {
        $(".randomarea").html(random);
        $(".play").hide();
        $(".restart").show();
        $(".restart").click(function(e){
            $(".randomarea").text("0");
            $(".restart").hide();
            $(".play").show();

        });
    });

    function reset() {
        var image_list = $("img");
        for (var i = 0; i < image_list.length; i++) {
            num = Math.floor((Math.random() * 12) + 1);
            $(image_list[i]).attr("value", num);
        }
        random = Math.floor((Math.random() * 120) + 19);
        $(".randomarea").html(random);
        score = 0;
        $(".footer").html(score);
    }

    reset();

    $("img").click(function (e) {
        var value = Number($(this).attr("value"));
        score += value;

        if (random < score) {
            $(".losewin").html("Game over!");
            $(".losses").text("Losses:").append(losses);
            reset();
            losses++;
        }
        else if (random === score) {
            $(".losewin").html("You win!");
            $(".win").text("Win:").append(win);
            reset();
            win++;
        }
        $(".footer").html(score);
    
    })

    $(".restart").click(function(e){
        console.log("klik")
    });
   

});





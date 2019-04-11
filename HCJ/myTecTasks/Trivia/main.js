
var question1 = "What was the first full length CGI movie?";
var a1 = "A Bug's Life";
var b1 = "MonstersInc.";
var c1 = "Toy Story";
var d1 = "The Lion King";
var answer1 = c1;

var question2 = "Which of these is NOT a name of one of the Spice Girls?";
var a2 = "Sporty Spice";
var b2 = "Fred Spice";
var c2 = "Scary Spice";
var d2 = "Posh Spice";
var answer2 = b2;

$("document").ready(function (e) {
    $(".q2").hide();
    $(".photo").hide();
    $(".question").hide();
    $(".second_background").hide();
    $(".start").click(function (e) {
        $(".start").hide();
        $(".background").css("background-image", "url('/Users/mac/Desktop/HCJ/myTecTasks/Trivia/image/635810c362b0887.png')");
        $(".background").css("background-size", "cover");
        $(".question").show();
        $(".question1").html(question1);
        $(".a").html(a1);
        $(".b").html(b1);
        $(".c").html(c1);
        $(".d").html(d1);
    });

    $(".a").click(function (e) {
        $(".question1").text("NOPE!");
        $(".correct_answer1").text("The Correct Answer was:").append(c1);
        $(".variants").hide();
        $(".photo").show();
    });
    $(".b").click(function (e) {

        $(".question1").text("NOPE!");
        $(".correct_answer1").text("The Correct Answer was:").append(c1);
        $(".variants").hide();
        $(".photo").show();

    });
    $(".c").click(function (e) {

        if (answer1) {
            $(".question1").text("CORRECT!");
            $(".variants").hide();
            $(".photo").show();
        }

    });
    $(".d").click(function (e) {
        $(".question1").text("NOPE!");
        $(".correct_answer1").text("The Correct Answer was:").append(c1);
        $(".variants").hide();
        $(".photo").show();

    });

    $(".next").click(function (e) {
        $(".photo").hide();
        $(".q1").hide();
        $(".q2").show();
        $(".variants").show();
        $(".correct_answer1").hide();
        $(".correct_answer2").hide();

        $(".question2").html(question2);
        $(".a").html(a2);
        $(".b").html(b2);
        $(".c").html(c2);
        $(".d").html(d2);
    });

    $(".a").click(function (e) {
        $(".question2").text("NOPE!");
        $(".correct_answer2").show();
        $(".correct_answer2").text("The Correct Answer was:").append(b2);
        $(".variants").hide();
        $(".photo").show();
    });
    $(".b").click(function (e) {

        if (answer2) {
            $(".question2").text("CORRECT!");
            $(".variants").hide();
            $(".photo").show();
        }

    });
    $(".c").click(function (e) {
        $(".question2").text("NOPE!");
        $(".correct_answer2").show();
        $(".correct_answer2").text("The Correct Answer was:").append(b2);
        $(".variants").hide();
        $(".photo").show();

    });
    $(".d").click(function (e) {
        $(".question2").text("NOPE!");
        $(".correct_answer2").show();
        $(".correct_answer2").text("The Correct Answer was:").append(b2);
        $(".variants").hide();
        $(".photo").show();

    });

});
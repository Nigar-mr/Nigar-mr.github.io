
$(document).ready(function(e){

    var element;
    $("input").click(function (event){

    var text = $("input").text();
    
    $("input").html("<ul class=list-group><li class=list-group-item> '" + text + "'<li><ul>");
})
$(document).on("keypress", "ul", function(e) {
    if (event.key === "Enter") {
        input_value = $(this).val();
        $(this).parent().html(input_value);
    }
});
   
$(this).css("background", "blue");
    if(element){
        $(element).css("background", "white");
    }
    element=this;






});


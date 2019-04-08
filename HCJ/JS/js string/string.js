

var text = "lorem ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

function newtext() {
    var splittext = text.split(" ");
    for (var i = 0; i < splittext.length; i++) {
        var first_letter= splittext[i][0].toUpperCase();
      splittext[i]=splittext[i].replace(splittext[i][0],first_letter);

    }
    console.log(text);
    console.log(splittext.join(" "));
}
newtext();

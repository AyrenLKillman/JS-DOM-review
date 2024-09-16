let background = document.body;

background.style.backgroundColor = "lightblue";

//this is here to act like a switch, true = lightblue, false = red
let backgroundColor = true;
function changeBackground() {
    if (backgroundColor == true) {
        background.style.backgroundColor = "red";
        backgroundColor = false;
    } else if (backgroundColor == false) {
        background.style.backgroundColor = "lightblue";
        backgroundColor = true;
    }
}


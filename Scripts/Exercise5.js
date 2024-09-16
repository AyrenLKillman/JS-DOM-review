InputText = document.getElementById("textInput");
InputText.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("textDisplay").innerHTML = InputText.value;
    }
})
background = document.body;
BTI = document.getElementById("BTI");



function changecolorA() {
    BTI.style.color = "white";
    const startColor = '#FF69B4';
    const endColor = '#33CC33';
    const gradient = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    document.body.style.backgroundImage = gradient;
}
function changecolorB() {
    BTI.style.color = "blue";
    const startColor = '#FE9900';
    const endColor = '#7DDA58';
    const gradient = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    document.body.style.backgroundImage = gradient;
}
function changecolorC() {
    BTI.style.color = "cyan";
    const startColor = '#9E5354';
    const endColor = '#F7DC6F';
    const gradient = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    document.body.style.backgroundImage = gradient;
}
document.addEventListener("visibilitychange", DOMManipulation());

var guessNum;
var info = [];

function DOMManipulation() {
    const textElements = document.getElementsByClassName("text");
    let name = textElements[0].getElementsByClassName("innerText");
    // guessNum = textElements.length/8;
    // for(let i = 0; i < textElements.length; i += 8) {
    //     let row = [];
    //     row.push(textElements[0].getElementsByClassName("innerText"));

    // }
    if(guessNum == 0) document.bgColor = "black";
    if(guessNum == 1) document.bgColor = "darkgray";
    if(guessNum == 2) document.bgColor = "purple";
    if(name === "Stephen Curry") document.bgColor = "red";

}
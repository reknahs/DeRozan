var _ = require("python-shell");

document.addEventListener("visibilitychange", DOMManipulation());

var guessNum;
var info;

function data_extraction(info) {
    alert('hi');
    var pyshell = new PythonShell("compute.py");
    pyshell.on('message', function (message) {
        alert(message);
    });
}

function DOMManipulation() {
    const textElements = document.getElementsByClassName("text");
    guessNum = textElements.length/8;
    info = [];
    for(let i = 0; i < textElements.length; i += 8) {
        let row = [];
        // name, conference, and divison
        for(let j = i; j < i+4; j++) {
            if(j == i+1 || j == i+4) continue;
            let new_col = [];
            new_col.push(textElements[j].innerText);
            if(textElements[j].offsetParent.classList[1] !== "green") new_col.push("gray");
            else new_col.push(textElements[j].offsetParent.classList[1]);
            row.push(new_col);
        }
        // team, position, height, age, and jersey number
        for(let j = i+1; j < i+8; j++) {
            if(j == i+2 || j == i+3) continue;
            let new_col = [];
            if(j >= i+5) new_col.push(textElements[j].offsetParent.innerText);
            else new_col.push(textElements[j].innerText);
            if(textElements[j].offsetParent.classList[1] !== "green" && textElements[j].offsetParent.classList[1] !== "yellow") new_col.push("gray");
            else new_col.push(textElements[j].offsetParent.classList[1]);
            row.push(new_col);
        }
        info.push(row);
    }
    data_extraction(info);
}
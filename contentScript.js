document.addEventListener("visibilitychange", DOMManipulation());

var guessNum;
var info;

function DOMManipulation() {
    const textElements = document.getElementsByClassName("text");
    guessNum = textElements.length/8;
    info = [];
    for(let i = 0; i < textElements.length; i += 8) {
        let row = [];
        // name (gray or green)
        let col1 = [];
        col1.push(textElements[i].innerText);
        if(textElements[i].offsetParent.classList[1] !== "green") col1.push("gray");
        else col1.push(textElements[i].offsetParent.classList[1]);
        row.push(col1);
        // team (gray, yellow, or green)
        let col2 = [];
        col2.push(textElements[i+1].innerText);
        if(textElements[i+1].offsetParent.classList[1] !== "green" && textElements[i+1].offsetParent.classList[1] !== "yellow") col2.push("gray");
        else col2.push(textElements[i+1].offsetParent.classList[1]);
        row.push(col2);
        // conference (gray or green)
        let col3 = [];
        col3.push(textElements[i+2].innerText);
        if(textElements[i+2].offsetParent.classList[1] !== "green") col3.push("gray");
        else col3.push(textElements[i+2].offsetParent.classList[1]);
        row.push(col3);
        // division (gray or green)
        let col4 = [];
        col4.push(textElements[i+3].innerText);
        if(textElements[i+3].offsetParent.classList[1] !== "green") col4.push("gray");
        else col4.push(textElements[i+3].offsetParent.classList[1]);
        row.push(col4);
        // position (gray, yellow, or green)
        let col5 = [];
        col5.push(textElements[i+4].innerText);
        if(textElements[i+4].offsetParent.classList[1] !== "green" && textElements[i+4].offsetParent.classList[1] !== "yellow") col5.push("gray");
        else col5.push(textElements[i+4].offsetParent.classList[1]);
        row.push(col5);
        for(let j = i+5; j < i+8; j++) {
            let new_col = [];
            new_col.push(textElements[j].offsetParent.innerText);
            if(textElements[j].offsetParent.classList[1] !== "green" && textElements[j].offsetParent.classList[1] !== "yellow") new_col.push("gray");
            else new_col.push(textElements[j].offsetParent.classList[1]);
            row.push(new_col);
        }
        // // height (gray (up or down), yellow (up or down), or green)
        // let col6 = [];
        // col6.push(textElements[i+5].offsetParent.innerText);
        // if(textElements[i+5].offsetParent.classList[1] !== "green" && textElements[i+5].offsetParent.classList[1] !== "yellow") col6.push("gray");
        // else col6.push(textElements[i+5].offsetParent.classList[1]);
        // row.push(col6);
        // // age (gray (up or down), yellow (up or down), or green)
        // let col7 = [];
        // col7.push(textElements[i+6].offsetParent.innerText);
        // if(textElements[i+6].offsetParent.classList[1] !== "green" && textElements[i+6].offsetParent.classList[1] !== "yellow") col7.push("gray");
        // else col7.push(textElements[i+6].offsetParent.classList[1]);
        // row.push(col7);
        // // number (gray (up or down), yellow (up or down), or green)
        // let col8 = [];
        // col8.push(textElements[i+7].offsetParent.innerText);
        // if(textElements[i+7].offsetParent.classList[1] !== "green" && textElements[i+7].offsetParent.classList[1] !== "yellow") col8.push("gray");
        // else col8.push(textElements[i+7].offsetParent.classList[1]);
        // row.push(col8);

        info.push(row);
    }
    for(let i = 0; i < info.length; i++) {
        for(let j = 0; j < info[i].length; j++) {
            for(let k = 0; k < info[i][j].length; k++) {
                alert(info[i][j][k]);
            }
        }
    }

}
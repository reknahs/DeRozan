document.addEventListener("visibilitychange", DOMManipulation());

var guessNum;
var info;

function data_extraction(info) {
    let HTML = `
    <h2>Best Guesses</h2>
    <div class="container table-container">
        <div class="game-table" id ="answers">
            <div class="game-table__head">
                <div class="game-table__row">
                    <div class="game-table__cell">Player Name</div>
                    <div class="game-table__cell">Ranking</div>
                    <div class="game-table__cell">Expected Results</div>
                </div>
            </div> 
            <div class="game-table__body">
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell">1</div>
                    <div class="game-table__cell">234.234</div>
                </div>
            </div> 
        </div>
    </div>
    <br><br><br><br><br><br>
    `;
    document.getElementsByClassName("footer-container")[0].insertAdjacentHTML("beforebegin", HTML);
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
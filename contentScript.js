document.addEventListener("visibilitychange", DOMManipulation());

var guessNum;
var info;
var data = [];

function display_table() {
    let HTML = `
    <h2>Best Guesses</h2>
    <div class="container table-container">
        <div class="game-table" id ="answers">
            <div class="game-table__head">
                <div class="game-table__row">
                    <div class="game-table__cell h">Player Name</div>
                    <div class="game-table__cell h">Ranking</div>
                    <div class="game-table__cell h">Expected Results</div>
                </div>
            </div> 
            <div class="game-table__body">
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell center">1</div>
                    <div class="game-table__cell center">234</div>
                </div>
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell center">1</div>
                    <div class="game-table__cell center">234</div>
                </div>
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell center">1</div>
                    <div class="game-table__cell center">234</div>
                </div>
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell center">1</div>
                    <div class="game-table__cell center">234</div>
                </div>
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell center">1</div>
                    <div class="game-table__cell center">234</div>
                </div>
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell center">1</div>
                    <div class="game-table__cell center">234</div>
                </div>
                <div class="game-table__row">
                    <div class="game-table__cell center">Stephen Curry</div>
                    <div class="game-table__cell center">1</div>
                    <div class="game-table__cell center">234</div>
                </div>
            </div> 
        </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    `;
    document.getElementsByClassName("footer-container")[0].insertAdjacentHTML("beforebegin", HTML);
}

function getPlayersWith(guess, team, conference, division, position, height, age, number, data) {

}

function compute_best() {
    for(let i = 0; i < info.length; i++) {
        let elims = getPlayersWith()
        alert(info[i][0][0]);
    }
}

function parse_file_data(info1, info2) {
    for(let i = 0; i < info1.length-1; i++) {
        let row = [];
        let temp = info1[i].split(" ");
        row.push(temp[temp.length-1]); //number 
        row.push(temp[temp.length-2]); //height
        row.push(temp[temp.length-3]); //position
        row.push(temp[temp.length-4]); //team
        let s = "";
        for(let j = 0; j < temp.length-4; j++) {
            s += temp[j] + " ";
        }
        row.push(s.trim());
        temp = info2[i].split("|");
        row.push(temp[0]);
        let temp2 = temp[1].split(" ");
        let row2 = [];
        for(let j = 0; j < temp2.length-1; j++) {
            row2.push(temp2[j]);
        }
        row.push(row2);
        data.push(row);
    }
    compute_best();
}

function getText(link) {
    const url = chrome.runtime.getURL(link);
    return fetch(url).then((response) => response.text()).then((json) => json);
}

async function grabData() {
    let info1 = await getText("webscraping/data.txt");
    let info2 = await getText("webscraping/prevTeams.txt");
    parse_file_data(info1.split("\n"), info2.split("\n"));
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
    grabData();
}
document.addEventListener("visibilitychange", DOMManipulation());

var guessNum;
var info;
var data = [];
var data_copy = [];
var indices = {};

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

function yellow_pos(pos1, pos2) {
    yellow_po = {"C": ["F-C", "C-F"], "C-F": ["F-C", "C", "F", "G-F", "F-G"], "F-C": ["C-F", "C", "F", "G-F", "F-G"], "F": ["F-C", "C-F", "G-F", "F-G"], "F-G": ["G-F", "G", "F", "F-C", "C-F"],
              "G-F": ["F-G", "G", "F", "F-C", "C-F"], "G": ["G-F", "F-G"]};
    return yellow_po[pos1].includes(pos2);
}

// data = name, team, conference, division, position, height, age, number
function getPlayersWith(guess, team, conference, division, position, height, age, number) {
    let count = 0
    let elims = []
    for(let i = 0; i < data.length; i++) {
        if(data[i] == guess) continue;
        let requirement = 0;
        //check
        if(team == "green" && data[i][1] == guess[1]) {
            // alert(1);
            requirement++;
        }
        else if(team == "yellow" && data[i][8].includes(guess[1]) && data[i][1] != guess[1]) {
            requirement++;
        }
        else if(team == "gray" && !data[i][8].includes(guess[1]) && data[i][1] != guess[1]) {
            requirement++;
        }

        //check
        if(conference == "green" && data[i][2] == guess[2]) {
            // alert(2);
            requirement++;
        }
        else if(conference == "gray" && data[i][2] != guess[2]) {
            requirement++;
        }

        //check
        if(division == "green" && data[i][3] == guess[3]) {
            // alert(3);
            requirement++;
        }
        else if(division == "gray" && data[i][3] != guess[3]) {
            requirement++;
        }

        //check
        if(position == "green" && data[i][4] == guess[4]) {
            // alert(4);
            requirement++;
        }
        else if(position == "yellow" && yellow_pos(data[i][4], guess[4])) {
            requirement++;
        }
        else if(position == "gray" && data[i][4] != guess[4] && !yellow_pos(data[i][4], guess[4])) {
            requirement++;
        }

        //check
        let real_height_data = parseInt(data[i][5][0])*12+parseInt(data[i][5][2]);
        let real_height_guess = parseInt(guess[5][0])*12+parseInt(guess[5][2]);
        if(height[0] != "↓" && height[0] != "↑" && data[i][5] == guess[5]) {
            // alert(5);
            requirement++;
        }
        else if(height.substring(1, height.length) == "yellow" && data[i][5] != guess[5]) {
            if(height[0] == "↓") {
                if(real_height_guess-real_height_data <= 2 && real_height_guess-real_height_data > 0) {
                    requirement++;
                }
            }
            else if(height[0] == "↑") {
                if(real_height_data-real_height_guess <= 2 && real_height_data-real_height_guess > 0) {
                    requirement++;
                }
            }
        }
        else if(height.substring(1, height.length) == "gray" && data[i][5] != guess[5]){
            requirement++;
        }

        //check
        let real_age_data = parseInt(data[i][6]);
        let real_age_guess = parseInt(guess[6]);
        if(age[0] != "↓" && age[0] != "↑" && data[i][6] == guess[6]) {
            // alert(6);
            requirement++;
        }
        else if(age.substring(1, age.length) == "yellow" && data[i][6] != guess[6]) {
            if(age[0] == "↓") {
                if(real_age_guess-real_age_data <= 2 && real_age_guess-real_age_data > 0) {
                    requirement++;
                }
            }
            else if(age[0] == "↑") {
                if(real_age_data-real_age_guess <= 2 && real_age_data-real_age_guess > 0) {
                    requirement++;
                }
            }
        }
        else if(age.substring(1, age.length) == "gray" && data[i][6] != guess[6]) {
            requirement++;
        }

        //check
        let real_number_data = parseInt(data[i][7]);
        let real_number_guess = parseInt(guess[7]);
        if(number[0] != "↓" && number[0] != "↑" && data[i][7] == guess[7]) {
            // alert(7);
            requirement++;
        }
        else if(number.substring(1, number.length) == "yellow" && data[i][7] != guess[7]) {
            if(number[0] == "↓") {
                if(real_number_guess-real_number_data <= 2 && real_number_guess-real_number_data > 0) {
                    requirement++;
                }
            }
            else if(number[0] == "↑") {
                if(real_number_data-real_number_guess <= 2 && real_number_data-real_number_guess > 0) {
                    requirement++;
                }
            }
        }
        else if(number.substring(1, number.length) == "gray" && data[i][7] != guess[7]) {
            requirement++;
        }

        if(requirement == 7) {
            count++;
            alert(data[i][0]);
        }
        else {
            elims.push(i);
        }
    }
    return [count, elims];

}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

//guess, team, conference, division, position, height, age, number
function getBestGuess() {
    var best = [];
    let two = ["green", "gray"]
    let three = ["green", "gray", "yellow"];
    let five = ['"green', "↓gray", "↑gray", "↓yellow", "↑yellow"];
    for(let i = 0; i < data.length; i++) {
        let guess = data[i];
        if(i%100 == 0) alert(i);
        let total_bits = 0;
        let asdf = 0;
        for(let t = 0; t < 3; t++) {
            for(let c = 0; c < 2; c++) {
                for(let d = 0; d < 2; d++) {
                    for(let p = 0; p < 3; p++) {
                        for(let h = 0; h < 5; h++) {
                            for(let a = 0; a < 5; a++) {
                                for(let n = 0; n < 5; n++) {
                                    let proba = getPlayersWith(guess, three[t], two[c], two[d], three[p], five[h], five[a], five[n])[0]/data.length;
                                    if(proba == 0) continue;
                                    bits = -1*proba*Math.log2(proba);
                                    asdf += proba;
                                    total_bits += bits;
                                }
                            }
                        }
                    }
                }
            }
        }
        alert(asdf);
        alert(total_bits);
        best.push([total_bits, guess]);
    }
    best.sort(sortFunction);
    return best;
}

function startmain() {
    var base_arr = [data_copy[indices["Darius Days"]],
                    data_copy[indices["Xavier Tillman"]],
                    data_copy[indices["Louis King"]],
                    data_copy[indices["Shai Gilgeous-Alexander"]],
                    data_copy[indices["Herbert Jones"]],
                    data_copy[indices["Kenyon Martin Jr."]],
                    data_copy[indices["Isaiah Livers"]],
                    data_copy[indices["Naji Marshall"]],
                    data_copy[indices["Jack White"]],
                    data_copy[indices["Derrick Jones Jr."]]];
    // if(info.length == 0) {
    //     display_table(base_arr);
    // }
    // else {
    //     let best_guesses = getBestGuess().slice(0, 10);
    // }
    let guesses = getBestGuess().slice(0, 10);
    alert(guesses[0][0].toString()+" "+guesses[0][1]);
    alert(guesses[1][0].toString()+" "+guesses[1][1]);
    alert(guesses[2][0].toString()+" "+guesses[2][1]);
    alert(guesses[3][0].toString()+" "+guesses[3][1]);
    alert(guesses[4][0].toString()+" "+guesses[4][1]);
    alert(guesses[5][0].toString()+" "+guesses[5][1]);
    alert(guesses[6][0].toString()+" "+guesses[6][1]);
    alert(guesses[7][0].toString()+" "+guesses[7][1]);
    alert(guesses[8][0].toString()+" "+guesses[8][1]);
    alert(guesses[9][0].toString()+" "+guesses[9][1]);
}

function compute_best() {
    for(let i = 0; i < info.length; i++) {
        let p = info[i];
        let elims = getPlayersWith(data_copy[indices[p[0][0]]], p[3][1], p[1][1], p[2][1], p[4][1], p[5][0][p[5][0].length-1]+p[5][1], p[6][0][p[6][0].length-1]+p[6][1], p[7][0][p[7][0].length-1]+p[7][1]);
        for(let j = elims[1].length-1; j >= 0; j--) {
            data.splice(elims[1][j], 1);
        }  
    }
    startmain();
}

function parse_file_data(info1) {
    for(let i = 0; i < info1.length-1; i++) {
        let row = [];
        let temp = info1[i].split("|");
        row.push(temp[0]); //name 
        indices[temp[0]] = i;
        row.push(temp[1]); //team
        row.push(temp[2]); //conference
        row.push(temp[3]); //division
        row.push(temp[4]); //position
        row.push(temp[5]); //height
        row.push(temp[6]); //age
        row.push(temp[7]); //number
        let row2 = [];
        for(let j = 0; j < temp[8].length; j += 3) {
            row2.push(temp[8].slice(j, j+3))
        }
        row.push(row2);
        data.push(row);
        data_copy.push(row);
    }
    compute_best();
}

function getText(link) {
    const url = chrome.runtime.getURL(link);
    return fetch(url).then((response) => response.text()).then((json) => json);
}

async function grabData() {
    let info1 = await getText("webscraping/data.txt");
    parse_file_data(info1.split("\n"));
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
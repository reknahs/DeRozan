document.addEventListener("visibilitychange", DOMManipulation());

var guessNum;
var info;
var data = [];
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

function Conference(team1, team2) {
    return true;
}

function Division(team1, team2) {
    return true;
}

function yellow_pos(pos1, pos2) {
    return true;
}

function getPlayersWith(guess, team, conference, division, position, height, age, number) {
    let count = 0
    let elims = []
    alert(data[0]);
    for(let i = 0; i < data.length; i++) {
        let requirement = 0;
        if(team == "green" && data[i][3] == guess[3]) {
            requirement++;
        }
        else if(team == "yellow" && data[i][6].includes(guess[3]) && data[i][3] != guess[3]) {
            requirement++;
        }
        else if(team == "gray" && !data[i][6].includes(guess[3]) && data[i][3] != guess[3]) {
            requirement++;
        }

        //NEED TO MAKE CONFERENCE FUNCTION
        if(conference == "green" && Conference(data[i][3], guess[3])) {
            requirement++;
        }
        else if(conference == "gray" && !Conference(data[i][3], guess[3])) {
            requirement++;
        }

        //NEED TO MAKE DIVISION FUNCTION
        if(division == "green" && Division(data[i][3], guess[3])) {
            requirement++;
        }
        else if(division == "gray" && !Division(data[i][3], guess[3])) {
            requirement++;
        }

        //NEED TO MAKE YELLOW POS FUNCTION
        if(position == "green" && data[i][2] == guess[2]) {
            requirement++;
        }
        else if(position == "yellow" && yellow_pos(data[i][2], guess[2])) {
            requirement++;
        }
        else if(position == "gray" && data[i][2] != guess[2] && !yellow_pos(data[i][2], guess[2])) {
            requirement++;
        }
        
        if(height[0] != "↓" && height[0] != "↑" && data[i][1] == guess[1]) {
            requirement++;
        }
        else if(height.substring(1, height.length) == "yellow" && data[i][1] != guess[1]) {
            if(height[0] == "↓") {

            }
            if(height[0] == "↑") {
                
            }
        }
        else {}

    }

    //     d = [int(guess[5][0]), int(guess[5][2:])]
    //     g = [int(data[i][5][0]), int(data[i][5][2:])]
    //     r = []
    //     if d[1] - 1 >= 0:
    //         r.append([d[0], d[1]-1])
    //     else:
    //         r.append([d[0]-1, 11])

    //     if r[-1][1] - 1 >= 0:
    //         r.append([r[-1][0], r[-1][1]-1])
    //     else:
    //         r.append([r[-1][0]-1, 11])

    //     if d[1] + 1 <= 11:
    //         r.append([d[0], d[1]+1])
    //     else:
    //         r.append([d[0]+1, 0])

    //     if r[-1][1] + 1 <= 11:
    //         r.append([r[-1][0], r[-1][1]+1])
    //     else:
    //         r.append([r[-1][0]+1, 0])

    //     if height == 0:
    //         if data[i][5] == guess[5]:
    //             requirement += 1
    //     elif height == 1:
    //         if g in r[2:]:
    //             requirement += 1
    //     elif height == 2:
    //         if g in r[:2]:
    //             requirement += 1
    //     elif height == 3:
    //         if data[i][5] != guess[5] and g not in r and 100*g[0]+g[1] > 100*d[0]+d[1]:
    //             requirement += 1
    //     else:
    //         if data[i][5] != guess[5] and g not in r and 100*g[0]+g[1] < 100*d[0]+d[1]:
    //             requirement += 1

    //     if age == 0:
    //         if data[i][6] == guess[6]:
    //             requirement += 1
    //     elif age == 1:
    //         if int(data[i][6]) in [int(guess[6])+1, int(guess[6])+2]:
    //             requirement += 1
    //     elif age == 2:
    //         if int(data[i][6]) in [int(guess[6])-2, int(guess[6])-1]:
    //             requirement += 1
    //     elif age == 3:
    //         if data[i][6] != guess[6] and int(data[i][6]) not in [int(guess[6])-2, int(guess[6])-1, int(guess[6])+1, int(guess[6])+2] and int(data[i][6]) > int(guess[6]):
    //             requirement += 1
    //     else:
    //         if data[i][6] != guess[6] and int(data[i][6]) not in [int(guess[6])-2, int(guess[6])-1, int(guess[6])+1, int(guess[6])+2] and int(data[i][6]) < int(guess[6]):
    //             requirement += 1

    //     if number == 0:
    //         if data[i][7] == guess[7]:
    //             requirement += 1
    //     elif number == 1:
    //         if int(data[i][7]) in [int(guess[7])+1, int(guess[7])+2]:
    //             requirement += 1
    //     elif number == 2:
    //         if int(data[i][7]) in [int(guess[7])-2, int(guess[7])-1]:
    //             requirement += 1
    //     elif number == 3:
    //         if data[i][7] != guess[7] and int(data[i][7]) not in [int(guess[7])-2, int(guess[7])-1, int(guess[7])+1, int(guess[7])+2] and int(data[i][7]) > int(guess[7]):
    //             requirement += 1
    //     else:
    //         if data[i][7] != guess[7] and int(data[i][7]) not in [int(guess[7])-2, int(guess[7])-1, int(guess[7])+1, int(guess[7])+2] and int(data[i][7]) < int(guess[7]):
    //             requirement += 1

    //     if requirement == 7:
    //         count += 1
    //     else:
    //         elims.append(i)
    // return [count,elims]
}

function compute_best() {
    for(let i = 0; i < info.length; i++) {
        let p = info[i];
        let elims = getPlayersWith(data[indices[p[0][0]]], p[3][1], p[1][1], p[2][1], p[4][1], p[5][0][p[5][0].length-1]+p[5][1], p[6][0][p[6][0].length-1]+p[6][1], p[7][0][p[7][0].length-1]+p[7][1]);
        break;
    }
}

function parse_file_data(info1) {
    for(let i = 0; i < info1.length-1; i++) {
        let row = [];
        let temp = info1[i].split("|");
        row.push(temp[0]); //name 
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
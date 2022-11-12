import fetch from "node-fetch";
import cheerio from "cheerio";

var all_links = []

const getRawData = (URL) => {
    return fetch(URL)
        .then((response) => response.text())
        .then((data) => {
            return data;
        });
}

const parent_URL = "https://www.nba.com/players"

const getAllLinks = async() => {
    const rawParentData = await getRawData(parent_URL);
    const parsedParentData = cheerio.load(rawParentData);
    const nameList = parsedParentData("html body script")[2].children[0].data;
    let all_ids = nameList.toString().split("PERSON_ID");
    let len = all_ids.length;
    for(let i = 1; i < len; i++) {
        all_links.push("https://www.nba.com/stats/player/"+all_ids[i].slice(2).split(",")[0]+"/career");
    }
    getPreviousTeamsAndAge()
}

const getPreviousTeamsAndAge = async() => {
    for(let i = 0; i < all_links.length; i++) {
        let url = all_links[i];
        console.log(url);
        console.log(document.getElementsByClassName("Crom_text__NpR1_"));
        const rawData = await getRawData(url)
        const parsedData = cheerio.load(rawData);
        const data = parsedData("*");
        break;
    }
}


getAllLinks();
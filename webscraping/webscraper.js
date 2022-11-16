import fetch from "node-fetch";
import cheerio from "cheerio";
import {readFileSync, promises as fsPromises} from 'fs';

// array of all links
var all_links = []

const getRawData = (URL) => {
    return fetch(URL)
        .then((response) => response.text())
        .then((data) => {
            return data;
        });
}

// gets requests for every link
const getAllLinks = async() => {
    const contents = readFileSync("webscraping/links.txt", 'utf-8');

    const arr = contents.split(/\r?\n/);
    for(let i = 0; i < arr.length-1; i++) {
        console.log(arr[i]);
        const rawData = await getRawData(arr[i]);
        const parsedData = cheerio.load(rawData);
        const age = parsedData("div"); //[1]["children"][0]["data"];
        for(let j = 0; j < age.length; j++) {
            for(let k = 0; k < age[j].children.length; k++) {
                console.log(age[j].children[k]["data"]);
            }
        }
        //console.log(age);
        break;
        // console.log(age.slice(age.indexOf("was born on")+12,age.length-1));
    }

    // const rawParentData = await getRawData(parent_URL);
    // const parsedParentData = cheerio.load(rawParentData);
    // const nameList = parsedParentData("html body script")[2].children[0].data;
    // let all_ids = nameList.toString().split("PERSON_ID");
    // let len = all_ids.length;
    // for(let i = 1; i < len; i++) {
    //     all_links.push("https://www.nba.com/stats/player/"+all_ids[i].slice(2).split(",")[0]+"/career");
    // }
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
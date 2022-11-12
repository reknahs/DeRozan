import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import time

url = "https://www.nba.com/players"
uClient = uReq(url)
page_html = uClient.read()
uClient.close()

page_soup = soup(page_html, "html.parser")
new_soup = str(page_soup).replace("null", "'null'").split("}")[246:747]
players = []
for i, v in enumerate(new_soup):
    new_soup[i] = eval(v[1:-17]+"}" if i != 0 else v[12:-17]+"}")
    players.append(new_soup[i]["PLAYER_FIRST_NAME"]+" "+new_soup[i]["PLAYER_LAST_NAME"])

f = open("data.txt", "w")
for i in new_soup:
    f.write(i["PLAYER_FIRST_NAME"]+" "+i["PLAYER_LAST_NAME"]+" ")
    f.write(i["TEAM_ABBREVIATION"]+" ")
    f.write(i["POSITION"]+" "+i["HEIGHT"]+" ")
    f.write(i["JERSEY_NUMBER"]+"\n")

f.close()
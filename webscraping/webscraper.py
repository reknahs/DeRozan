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
# players = []
# f = open("webscraping/links.txt", "w")
for i, v in enumerate(new_soup):
    if i == -1:
        new_soup[i] = eval(v[12:-17]+"}")
    else:
        new_soup[i] = eval(v[1:-17]+"}")
    # new_soup[i] = eval(v[1:-17]+"}" if i != 0 else v[12:-17]+"}")
#     name = new_soup[i]["PLAYER_SLUG"].split("-")[1][:5]+new_soup[i]["PLAYER_SLUG"].split("-")[0][:2]
#     players.append(new_soup[i]["PLAYER_FIRST_NAME"]+" "+new_soup[i]["PLAYER_LAST_NAME"])
#     link = "https://www.basketball-reference.com/players/"+name[0]+"/"+name+"01.html"
#     f.write(link+"\n")
# f.close()

f = open("webscraping/data.txt", "w")
for i in new_soup:
    f.write(i["PLAYER_FIRST_NAME"]+" "+i["PLAYER_LAST_NAME"]+"|")
    f.write(i["TEAM_ABBREVIATION"]+"|")
    f.write(i["POSITION"]+"|"+i["HEIGHT"]+"|")
    f.write(i["JERSEY_NUMBER"]+"\n")
f.close()
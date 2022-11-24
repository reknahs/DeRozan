import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import time
from datetime import date
from datetime import datetime

def find_all(string, sub):
    start = 0
    while True:
        start = string.find(sub, start)
        if start == -1: return
        yield start
        start += len(sub)

f = open("webscraping/links.txt", "r")
links = f.readlines()
f.close()
f = open("webscraping/prevTeams.txt", "w")
for i in links:
    print(i)
    url = i
    uClient = uReq(url)
    page_html = uClient.read()
    uClient.close()
    page_soup = str(soup(page_html, "html.parser"))

    dob = page_soup[page_soup.index("data-birth")+12:page_soup.index("data-birth")+22]
    date_time = datetime.strptime(dob, "%Y-%m-%d")
    today = date.today()
    age = today.year - date_time.year - ((today.month, today.day) < (date_time.month, date_time.day))

    section = page_soup[page_soup.index("<tbody>"):page_soup.index("</tbody>")]
    indices = list(find_all(section, 'data-stat="team_id"'))
    teams = set()
    for j in indices:
        if section[j+51:j+54] == "tat": continue
        teams.add(section[j+51:j+54])
    f.write(str(age)+"|")
    for j in teams: f.write(j+" ")
    f.write("\n")
    time.sleep(2)
f.close()
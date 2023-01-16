from urllib.request import urlopen as uReq
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
import ssl
import json
import time
from datetime import date
from datetime import datetime

ssl._create_default_https_context = ssl._create_unverified_context

url = "https://poeltl.dunk.town/_nuxt/static/1672683022/state.js"

req = Request(
    url=url, 
    headers={'User-Agent': 'Mozilla/5.0'}
)

page_html = urlopen(req).read()

page_soup = str(soup(page_html, "html.parser"))

list1 = page_soup.split("(")[2].split(")")[0]
vars = list1.split(",")

vals = json.loads("["+page_soup.split("(")[-1].split(")")[-3]+"]")

for i in reversed(range(len(vars))):
    page_soup = page_soup.replace(":"+vars[i], ": "+'"'+str(vals[i])+'"')

names = page_soup.split("slug")
for i in names[2:-31]: 
    d = '{"slug"'+i[:-2]

    firstName = d.split("firstName")[1].split(",")[0][2:-1]
    if firstName[0] == '"': firstName = firstName[1:]
    lastName = d.split("lastName")[1].split(",")[0][2:-1]
    if lastName[0] == '"': lastName = lastName[1:]
    name = firstName + " " + lastName

    position = d.split("pos")[1].split(",")[0][2:-1]
    if position[0] == '"': position = position[1:]

    heightFeet = d.split("heightFeet")[1].split(",")[0][2:-1]
    if heightFeet[0] == '"': heightFeet = heightFeet[1:]
    heightInches = d.split("heightInches")[1].split(",")[0][2:-1]
    if heightInches[0] == '"': heightInches = heightInches[1:]
    height = heightFeet+" "+heightInches

    birthDate = d.split("birthDate")[1].split(",")[0][2:-1]
    if birthDate[0] == '"': birthDate = birthDate[1:]
    date_time = datetime.strptime(birthDate, "%Y-%m-%d")
    today = date.today()
    age = today.year - date_time.year - ((today.month, today.day) < (date_time.month, date_time.day))

    jersey = d.split("jersey")[1].split(",")[0][2:-1]
    if jersey[0] == '"': jersey = jersey[1:]
    print(jersey)

# print(vars)
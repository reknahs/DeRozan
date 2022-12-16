from urllib.request import urlopen as uReq
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
import ssl
import json

ssl._create_default_https_context = ssl._create_unverified_context

url = "https://poeltl.dunk.town/_nuxt/static/1671129304/state.js"
req = Request(
    url=url, 
    headers={'User-Agent': 'Mozilla/5.0'}
)
page_html = urlopen(req).read()
page_soup = str(soup(page_html, "html.parser"))

list1 = page_soup.split("(")[2].split(")")[0]
vars = list1.split(",")

vals = json.loads("["+page_soup.split("(")[-1].split(")")[-3]+"]")
print(vars, vals)
import pandas as pd
from bs4 import BeautifulSoup
from splinter import Browser
import requests
import time

def scrape():
    
    executable_path = {'executable_path': 'chromedriver'}
    browser = Browser('chrome', **executable_path, headless=True)

    # Title & Paragraph Scrape
    url_1 = 'http://www.who.int/malaria/en/'
    browser.visit(url_1)
    soup_1 = BeautifulSoup(browser.html, "html.parser")
    news_title = soup_1.find('h3', class_='teaser_headline').text
    news_p = soup_1.find('div', class_='inlay_small_color').find('p').text
    print('\nscraping complete\n')

    # Creating and Returning Dictionary for API
    final = {
        "news_title": news_title,
        "news_p": news_p,
    }

    return final
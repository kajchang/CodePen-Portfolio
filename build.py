import cpen
import time

from selenium import webdriver
from jinja2 import Template


codepens = []

user = 'kaijchang'
page = 2

driver = webdriver.PhantomJS('/usr/local/bin/phantomjs')

driver.get('https://codepen.io/{}/pens/popular/'.format(user))

time.sleep(2.5)

pens_on_page = driver.find_elements_by_class_name('item-title')

for pen in pens_on_page:
    link = pen.find_element_by_tag_name('a')
    cpen.download_codepen(link.get_attribute('href'),
                          'pens/{}'.format(link.text))
    codepens.append(link.text)

while pens_on_page:
    driver.get('https://codepen.io/{}/pens/popular/{}'.format(user, page))

    time.sleep(2.5)

    pens_on_page = driver.find_elements_by_class_name('item-title')

    for pen in pens_on_page:
        link = pen.find_element_by_tag_name('a')
        cpen.download_codepen(link.get_attribute('href'),
                              'pens/{}'.format(link.text))
        codepens.append(link.text)

    page += 1

with open('templates/index.md') as index_md:
    index_md_template = Template(index_md.read())

with open('index.md', 'w') as index_md:
    index_md.write(index_md_template.render(**locals()))

driver.close()

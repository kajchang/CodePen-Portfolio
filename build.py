import cpen
import requests
from jinja2 import Template


codepens = []

pens = requests.get(
    'https://cpv2api.com/pens/public/kaijchang').json()['data']

for pen in pens:
    cpen.download_codepen(pen['link'])
    codepens.append(pen['title'])

with open('templates/index.md') as index_md:
    index_md_template = Template(index_md.read())

with open('index.md', 'w') as index_md:
    index_md.write(index_md_template.render(**locals()))

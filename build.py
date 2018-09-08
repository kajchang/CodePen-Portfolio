import cpen
import git
import requests
from jinja2 import Template

import os
import re

match_remote = 'https:\/\/github.com\/([a-zA-z0-9\-]+)\/([a-zA-z0-9\-]+)\.git \(push\)'

titles = []

pens = requests.get(
    'https://cpv2api.com/pens/public/kaijchang').json()['data']

for pen in pens:
    cpen.download_codepen(pen['link'])
    titles.append(pen['title'])

git = git.cmd.Git(os.path.dirname(__file__))

github_pages_link = '{}.github.io/{}'.format(re.search(match_remote, git.remote(
    verbose=True)).group(1), re.search(match_remote, git.remote(
        verbose=True)).group(2))

with open('templates/index.md') as index_md:
    index_md_template = Template(index_md.read())

with open('index.md', 'w') as index_md:
    index_md.write(index_md_template.render(
        codepens=titles, github_pages_link=github_pages_link))

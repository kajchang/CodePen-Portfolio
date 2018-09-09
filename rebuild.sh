#!/usr/bin/env bash

curl "https://cronitor.link/$CRONITOR_ID/run" -m 10 || true
python3 build.py
git add .
git commit -m 'Automated Weekly Rebuild'
git push -u github master
curl "https://cronitor.link/$CRONITOR_ID/complete" -m 10 || true

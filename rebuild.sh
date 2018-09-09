#!/usr/bin/env bash

curl "https://cronitor.link/$CRONITOR_ID/run" -m 10 || true
/Library/Frameworks/Python.framework/Versions/3.6/bin/python3 build.py
/usr/local/bin/git add .
/usr/local/bin/git commit -m 'Automated Weekly Rebuild'
curl "https://cronitor.link/$CRONITOR_ID/complete" -m 10 || true
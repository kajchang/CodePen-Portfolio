#!/usr/bin/env bash

curl "https://cronitor.link/$CRONITOR_ID/run" -m 10 || true
/usr/local/bin/python3.7 build.py
/usr/local/bin/git add .
/usr/local/bin/git commit -m 'Automated Weekly Rebuild'
curl "https://cronitor.link/$CRONITOR_ID/complete" -m 10 || true

# Codepen Portfolio

A showcase of my projects from Computer Programming A, a course on [p5.js](https://p5js.org).

This is a static Jekyll site hosted on Github Pages built by a weekly cronjob that downloads all codepens from my account using my [cpen module](https://github.com/kajchang/CodePen-Downloader) and profile data scraped using Selenium, builds `index.md` using jinja2 templates, and then commits the new build.

CronTab Example:

```bash
10 16 * * Sun (cd /path/to/project && CRONITOR_ID='your cronitor id' sh rebuild.sh)
```

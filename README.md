# Real Web CSS

Using [CSSTree](https://github.com/csstree/csstree) to test a real site's CSS and collect usage data

[Real Web CSS](...)

## How to use locally

1. Download Alexa's site list and make a top of site (`data/top-sites.csv`):

```
npm run sync:sites
```

1. Download a top site's CSS (`data/css/*.css`):

```
npm run download:css
```

> If something goes wrong on CSS downloading (freezing, network issue or errors on console), you can abort the process. Downloading will continue from the last successful processed site. You can set the start site by editing `data/idx.txt` file (if file doesn't exist downloading is start from the first one), which contains just a single number – site index.

3. To test collected CSS (`data/test-results.json`):

```
npm test
```

To generate a table with a test results and details (`README.md` and `test-details.md`):

```
npm run gen:table
```

To extract a usage data (`usage.md`):

```
npm run gen:usage
```

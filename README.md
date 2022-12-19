# Real Web CSS

Real site's CSS usage data analysis. Powered by [CSSTree](https://github.com/csstree/csstree) & [Discoveryjs](https://github.com/discoveryjs/discovery)

[Real Web CSS](https://csstree.github.io/real-web-css/)

## How to use locally

1. Download [The Majestic Million](https://majestic.com/reports/majestic-million)'s site list and make a top of site (output `data/sites.csv`):

    ```
    npm run sync:sites
    ```

1. Download a top site's CSS (output `data/css/*.css`):

    ```
    npm run download:css
    ```

    > If something goes wrong on CSS downloading (freezing, network issue or errors on console), you can abort the process. Downloading will continue from the last successful processed site. You can set the start site by editing `data/idx.txt` file (if file doesn't exist downloading is start from the first one), which contains just a single number – site index.

    You can specify a number of sites to be used for CSS downloading (25 by default):

    ```
    npm run download:css 100
    ```

1. Extract data from downloaded CSS (output `data/test-results.json`):

    ```
    npm test
    ```

1. Discover data

There are two options:

- Run a server that provides user interface:

    ```
    npm start
    ```

- Build static version (no server is required, see report in `build` folder):

    ```
    npm run build
    ```

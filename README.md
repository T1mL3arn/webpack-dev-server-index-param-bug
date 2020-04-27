# webpack's bug

Webpack's `devServer.index` param does not work as expected. [Documentation says](https://webpack.js.org/configuration/dev-server/#devserverindex) it is:

>The filename that is considered the index file

but the actual file being used is always `index.html`. 

## To reproduce

1. clone repo and `cd` to its directory
2. `npm install`
3. `npm start`
4. open [localhost:3000](localhost:3000)
5. see `index.html` instead of `foo.html`
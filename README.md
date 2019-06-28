# buildPlayground
Build compare playground


Ideated from https://x-team.com/blog/rollup-webpack-parcel-comparison/

Engine - node 10.16.0 LTS

A simple React app that's got simple implementations of all the basics:

    "react": "=16.8.6",
    "react-dom": "=16.8.6",
    "react-redux": "=7.1.0",
    "react-router-dom": "=5.0.1",
    "redux": "=4.0.1"
    
The exact package.json dependencies for our build tools:

Shared babel dependencies:

    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "@babel/preset-react": "^7.0.0",
    "babel-cli": "^6.26.0",
    "babel-loader": "^8.0.6",
    "@babel/plugin-external-helpers": "^7.2.0",
    "@babel/plugin-proposal-class-properties": "^7.4.4",
    "@babel/plugin-proposal-decorators": "^7.4.4",
    "@babel/plugin-proposal-do-expressions": "^7.2.0",
    "@babel/plugin-proposal-export-default-from": "^7.2.0",
    "@babel/plugin-proposal-export-namespace-from": "^7.2.0",
    "@babel/plugin-proposal-function-bind": "^7.2.0",
    "@babel/plugin-proposal-function-sent": "^7.2.0",
    "@babel/plugin-proposal-json-strings": "^7.2.0",
    "@babel/plugin-proposal-logical-assignment-operators": "^7.2.0",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.4.4",
    "@babel/plugin-proposal-numeric-separator": "^7.2.0",
    "@babel/plugin-proposal-optional-chaining": "^7.2.0",
    "@babel/plugin-proposal-pipeline-operator": "^7.3.2",
    "@babel/plugin-proposal-throw-expressions": "^7.2.0",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-syntax-import-meta": "^7.2.0"
    
parcel dependencies:

    "parcel-bundler": "^1.12.3"
    
rollup dependencies:

    "rollup": "=1.16.2",
    "rollup-plugin-babel": "^4.3.3",
    "rollup-plugin-uglify": "=6.0.2"
    
webpack dependencies:

    "webpack": "=4.35.0",
    "webpack-cli": "=3.3.5"
    
Each build tool's configuration is seperated into independent directories!

Battle of the Builds
We'll be comparing build time for development and production and additional features:

    $ npm run build-parcel
    $ npm run build-webpack
    $ npm run build-rollup
    
    $ npm run build-parcel-prod
    $ npm run build-webpack-prod
    $ npm run build-rollup-prod

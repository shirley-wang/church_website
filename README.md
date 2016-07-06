# Start your React project with Clarifai API

##### Why do we use npm?
npm is a robust, and consistent package manager for JavaScript. It will help us to specify and install package dependencies. 
Due to its consistency, npm is very quick to deploy and allows teams or users quickly collaborate with others or set up projects of the same build with a simple npm install.

If you do not have npm installed, download [Node.js](https://nodejs.org/en/download/) for your platform. 

## Getting started
Open your terminal and run the following commands.
```sh
$ mkdir YOUR_PROJECT_NAME && cd YOUR_PROJECT_NAME
$ npm init
```
**npm init** generates a [package.json](https://docs.npmjs.com/files/package.json) file for your project with all the behaviour described in the file.
## Installation
1.[React](https://facebook.github.io/react/) 
```sh
$ npm install react react-dom --save
```
--save writes dependencies into the package.json file for you.  

2.[Webpack](https://webpack.github.io/) 

Webpack is a modularization tool that bundles each individual module with dependencies to one single bundle file, we can use loaders and plugins to apply more resource files. . 

Webpack-dev-server serves the bundle file, it watches every changes of the source files, and we will be able to load the bundle file by going to localhost:8080/.

html-webpack-plugin is a plugin that simplifies HTML files to our bundle file.

```sh
$ npm install webpack webpack-dev-server html-webpack-plugin --save
```

3.[Babel](https://babeljs.io/)

JSX is a JavaScript syntax extension to ECMAScript 6th edition (ES6). And this is what I am using with React, it is not required, but it is recommended. So that babel-core, babel-loader, and babel-preset-react are needed to transform and load our code to browser-compliant code with Webpack.   

4.[Clarifai JavaScript API Client](https://github.com/Clarifai/clarifai-javascript) 
```sh
$ npm install clarifai
```

##### For your convenience, you can install all the packages we need by running this following command.

```sh
$ npm install react react-dom clarifai webpack webpack-dev-server html-webpack-plugin babel-core babel-loader babel-preset-react --save
```

##### Webpack.config.js
```js
var HtmlWebpackPlugin = require('html-webpack-plugin');

var htmlConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
});

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    htmlConfig
  ]  
};
```








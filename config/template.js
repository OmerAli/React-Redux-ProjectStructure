'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  chunks: ['base', 'app', 'manifest'],
  filename: 'index.html',
  name: 'NebrasPlusWeb',
  minify: {
    collapseWhitespace: true
  },
  title: 'Nebras Plus Web',
  template: 'template.ejs',
  links: [
    'https://fonts.googleapis.com/icon?family=Material+Icons|Source+Sans+Pro'
  ],
  scripts: [
    'https://cdn.omise.co/omise.js.gz'
  ],
  inject: false
});

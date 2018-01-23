module.exports = {
  test: /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    fix: true,
  }
};

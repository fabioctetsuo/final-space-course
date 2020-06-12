const path = require('path');
const context = path.join(__dirname, 'src');

module.exports = {
  context,
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'finalSpaceCharacters',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js'] },
        use: { loader: 'babel-loader' },
      },
    ],
  },
};

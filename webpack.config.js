const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['@babel/preset-env']
            }
        }
    ]
  },
  output: {
    filename: 'discord-remote-control-bot.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};



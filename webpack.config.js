var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['webpack/hot/dev-server','./src/main.ts'],
    //bundle: ['webpack/hot/dev-server','./src/test.js'],
    vendor: ['zone.js', 'reflect-metadata', 'angular2/platform/browser'],
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  resoleve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
    //new HtmlWebpackPlugin({
    //  title: 'My App',
    //  filename: './index.html'
    //}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName */'vendor', /* fileName */'vendor.bundle.js')
  ],
  //devtool: 'source-map',
  devtool: 'eval',
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};

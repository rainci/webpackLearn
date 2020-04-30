const webpack = require("webpack");
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // new webpack.optimize.CommonsChunkPlugin({//防止重复
    //   name: 'common' // 指定公共 bundle 的名称。加载
    // }),
    new webpack.DefinePlugin({//定义变量
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  optimization: {//import重复的js，提取到公共的js中
    splitChunks: {
      chunks: 'all',
      name: 'common'
    }
  },
})

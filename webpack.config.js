/*
 * @Author: rainci
 * @Date: 2020-04-23 18:18:24
 * @LastEditTime: 2020-04-29 11:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wpDemo/webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');
module.exports = {
  mode: 'production',//环境
  entry: {//入口文件
    app: './src/index.js',
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',//source-map
  devServer:{//简单的 web 服务器,修改内容自动更新
    port: 8000,
    hot: true,//增加热更新
    contentBase: './dist',//将 dist 目录下的文件，作为可访问文件
  },
  plugins: [//插件
    new CleanWebpackPlugin(),//清理产出文件
    new HtmlWebpackPlugin({//自动生成html
      title: 'rainci wp'  
    }),
    new webpack.NamedModulesPlugin(),//增加热更新功能
    new webpack.HotModuleReplacementPlugin()//增加热更新功能
  ],
  output: {//输出
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {//模块
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader' // translates CSS into CommonJS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  }
}
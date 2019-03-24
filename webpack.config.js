// Default entry point is ./src/index.js
// output defaults to ./dist/main.js for the main output file
// and to the ./dist folder for any other generated file

const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const devMode = process.env.NODE_ENV !== "production"

module.exports = {
  output: {
    filename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: __dirname + "/dist/index.html",
      inject: true,
      hash: false,
      minify: {
        removeComments: devMode ? false : true,
        collapseWhitespace: devMode ? false : true,
        minifyJS: devMode ? false : true,
        minifyCSS: devMode ? false : true
      }
    })
  ],
  devServer: {
    contentBase: "./dist"
  }
}

// Config I may need later...
// entry: './src/index.js',
// output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js',
// },

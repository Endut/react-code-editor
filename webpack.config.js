require('dotenv').config();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');
const PORT = parseInt(process.env.CLIENT_PORT) || 8080;


module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'src/index')],
  },
  devtool: "inline-source-map",
  output: {
    filename: "./dist/bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      leaflet_css: __dirname + "/node_modules/leaflet/dist/leaflet.css",
      leaflet_marker: __dirname + "/node_modules/leaflet/dist/images/marker-icon.png",
      // leaflet_marker_2x: __dirname + "/node_modules/leaflet/dist/images/marker-icon-2x.png",
      // leaflet_marker_shadow: __dirname + "/node_modules/leaflet/dist/images/marker-shadow.png"
    }
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {test: /\.(png|jpg)$/, loader: "file-loader?name=images/[name].[ext]"}
    ],
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html",
    }),
    new WebpackMd5Hash(),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new Dotenv()
  ],
};

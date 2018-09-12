const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

let config = {
  context: __dirname + '/app',

  resolve: {
    alias: {
      'actions': path.resolve(__dirname, 'app/model/actions'),
      'components': path.resolve(__dirname, 'app/view/components'),
      'containers': path.resolve(__dirname, 'app/view/containers'),
      'elements': path.resolve(__dirname, 'app/view/elements'),
      'fonts': path.resolve(__dirname, 'app/assets/fonts'),
      'img': path.resolve(__dirname, 'app/assets/img'),
      'style': path.resolve(__dirname, 'app/assets/style'),
      'reducers': path.resolve(__dirname, 'app/model/reducers'),
      'sagas': path.resolve(__dirname, 'app/model/sagas'),
      'setting': path.resolve(__dirname, 'app/setting'),
      'store': path.resolve(__dirname, 'app/model/store'),
      'variables': path.resolve(__dirname, 'app/assets/style/helpers/variables'),
      'utils': path.resolve(__dirname, 'app/model/utils')
    }
  },

  entry: './index.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'build')
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(less|css)$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: './assets/img/[name].[ext]'
        }
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          },
          warnings: true,
        },
      }),
    ],
  },

  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    inline: true,
    open: true
  }
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.plugins.push(new HtmlMinifierPlugin());
  }

  return config;
};
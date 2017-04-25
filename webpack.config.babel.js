import webpack from 'webpack';

export default {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      {
          test: /\.scss$/,
          loaders: ["style-loader", 'css-loader', 'sass-loader']
          // use: [{
          //     loader: "style-loader" // creates style nodes from JS strings
          // }, {
          //     loader: "css-loader" // translates CSS into CommonJS
          // }, {
          //     loader: "sass-loader" // compiles Sass to CSS
          // }]
      }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: process.argv.indexOf('-p') === -1 ? null : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};

var webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias: {
      Main: 'src/components/Main.jsx',
      applicationStyles: 'src/styles/app.scss'
    },
    extensions: ['','.js','jsx']
  },
  module:{
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.jsx?$/,
      query: {
        presets: ['react','es2015','stage-0']
      }
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ?  undefined : 'inline-source-map'
}

var path = require('path');

module.exports={
  entry: './entry.js',
  devtool:'source-map',
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist'),
  },
 module: {
    loaders: [
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}

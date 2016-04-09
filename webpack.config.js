module.exports = {


  entry:"./src/js/main.js",
  output:{
    path:__dirname,
    filename:'bundle.js'
  },
  // Modules
  module:{
    loaders:[

      {
        test:/\.css$/,loader:"style!css!"
      },
      {
       test: /\.html$/,
       loader: "html"
     }

      //  Transpile file es6 files
      // { test: /\.es6$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};

const CopyWebpackPlugin = require('copy-webpack-plugin')

// TODO Bundle React, React-dom and the application js into a single file for added magic effect.

module.exports = {
  entry: "./source/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "../../../release/public"
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: "./index.html",
      to: __dirname + "../../../release/public"
    },
    {
      from: "./node_modules/react/umd/react.production.min.js",
      to: __dirname + "../../../release/public/react.production.min.js"
    },
    {
      from: "./node_modules/react-dom/umd/react-dom.production.min.js",
      to: __dirname + "../../../release/public/react-dom.production.min.js"
    }])
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
};

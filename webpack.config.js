const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // Entry point of the application
  entry: "./src/index.js",

  // Output configuration
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // Resolving extensions
  resolve: {
    extensions: [".js", ".jsx"], // Add '.jsx' here
  },

  // Module rules for loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handling both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets for React and modern JavaScript
          },
        },
      },
      {
        test: /\.css$/, // Handling CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Handling image files
        type: "asset/resource",
      },
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML template
      filename: "index.html", // Output HTML file name
    }),
  ],

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
};

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all"
    }
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }
  return config;
};
const filename = fileExtension =>
  isDev ? `[name].${fileExtension}` : `[name].[hash].${fileExtension}`;
const cssLoaders = newLoader => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    },
    "css-loader"
  ];

  if (newLoader) {
    loaders.push(newLoader);
  }

  return loaders;
};
const babelOptions = preset => {
  const options = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"]
  };
  if (preset) {
    options.presets.push(preset);
  }
  return options;
};
const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions()
    }
  ];
  if (isDev) {
    loaders.push("eslint-loader");
  }
  return loaders;
};
const plugins = () => {
  const basePlugins = [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css")
    }),
  ];
  if (isProd) {
    basePlugins.push(new BundleAnalyzerPlugin());
  }
  return basePlugins;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.js"]
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".ts", ".css", "scss", "sass", "less", "pug"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@styles": path.resolve(__dirname, "src/styles")
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders("sass-loader")
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|woff|waff2|eot|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript")
        }
      }
    ]
  }
};

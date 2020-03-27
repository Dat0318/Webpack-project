// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');

// module.exports = {
//   optimization: {
//     minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
//   },
//   // entry: {
//   // 	// [name] : [path]
//   // 	newfile: [
//   //     './src/index.js',
//   //     './src/my-test.js'
//   //   ]
//   // },
//   // entry: './src/index.js',
//   plugins: [
//   	new CleanWebpackPlugin(),
//   	new HtmlWebpackPlugin({
//   		title : 'Catching'
//   	}),
//     new MiniCssExtractPlugin({
//       filename: 'style.min.css'
//     })
//   ],
//   output: {
//     filename: 'main.min.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           // 'style-loader',
//           MiniCssExtractPlugin.loader,
//           'css-loader'
//         ]
//       }
//     ]
//   }
//   // ,
//   // optimization: {
//   // 	splitChunks: {
//   // 		chunks: 'all'
//   // 	}
//   // }
// };

// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   entry: [
//     './src/style.scss'
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(sa|sc)ss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: '../dist/style.min.css'
//     })
//   ]
// };

const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
     {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
     }
    ]
  }
};
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  devServer: {
    compress: true,
    port: 8000,
    historyApiFallback: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    })
  ]
}

module.exports = config

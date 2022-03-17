const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./config/paths');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: paths.appIndex,
    output: {
      path: paths.appBuild,
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      alias: {
        assets: paths.assets,
        components: paths.components,
        layouts: paths.layouts,
        pages: paths.pages,
        styles: paths.styles
      },
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css)$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(png|jp(e*)g|webp|svg|gif)$/,
          /**
           * The `type` setting replaces the need for "url-loader"
           * and "file-loader" in Webpack 5.
           *
           * setting `type` to "asset" will automatically pick between
           * outputing images to a file, or inlining them in the bundle as base64
           * with a default max inline size of 8kb
           */
          type: 'asset'
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appHTML,
        favicon: 'public/favicon.ico'
      }),
    ],
    devServer: {
      historyApiFallback: true
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};

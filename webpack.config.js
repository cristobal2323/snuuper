const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	resolve: {
		extensions: ['.js','.jsx'],
		modules: [
			path.join(__dirname,'src'),
			'node_modules'
		]
	},
	entry:[
		'webpack-dev-server/client',
		'webpack/hot/only-dev-server',
		path.join(__dirname,'src','index.jsx'),
	],

	output:{
		path: path.join(__dirname,'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
    	rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader'
				}
			},
			{
        		test: /\.scss$/,
        		exclude: /(node_modules)/,
        		use: [
          			'style-loader',
          			{
            			loader: 'css-loader',
            			options: {
              				importLoaders: 1,
              				modules: true,
              				localIdentName: '[name]__[local]___[hash:base64:5]',
            			},
          			},
          			{
            		loader: "sass-loader",
	            		options: {
	              			includePaths: [
	                			path.resolve(__dirname, './public')
	            			],
	              			sourceMap: true
	            		}
          			}
        		],
      		},
      		{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?name=[path][name].[ext]limit=10000&mimetype=application/font-woff" },
      		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader", options:{ name:'[path][name].[ext]', publicPath: '/'}},
      		{ test: /\.(gif|png|jpe?g|svg)$/i, loader: "file-loader",options:{name: '[path][name].[ext]',publicPath: '/'}},
      		{ test: /\.json$/, exclude: /(node_modules)/, use: 'json-loader'}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'redux Eccomerce',
			template: path.join(__dirname,'src','index.html'),
			filename: 'index.html'
		})
	],
	devServer: {
		host: '0.0.0.0',
		hot: true,
		port: 3000,
		inline: true,
		contentBase: path.join(__dirname,'src'),
		historyApiFallback : true
	}

}
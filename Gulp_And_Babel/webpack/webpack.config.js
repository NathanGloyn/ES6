var webpack = require("webpack");

module.exports = {
	entry: './app/js/entry.js',
	output: {
		filename: 'bundle.js',
		soureMapFilename: 'bundle.map'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
    		sourceMap: true,
			compress: {
				warnings: false
			}	
		})
	]
}
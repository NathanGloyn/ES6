var path = require('path');
var webpack = require('webpack');

module.exports = {
	resolve: {
		moduleDirectories: ["bower_components", "node_modules"]
	},
	plugins: [
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePluding(".bower.json", ["main"])
		)
	],
	output: {
		filename: 'bundle.js'
	}
}
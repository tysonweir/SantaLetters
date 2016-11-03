var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var SETTINGS = require('./settings');

var plugins = {
	uglify: new webpack.optimize.UglifyJsPlugin({
		warning: false,
		mangle: true,
		comments: false
	}),

	htmlWebpack: new HtmlWebpackPlugin({
		template: SETTINGS.TEMPLATE,
		inject: 'body',
		hash: true
	}),

	browserSync: new BrowserSyncPlugin({
		host: 'localhost',
		port: 8080,
		server: {
			baseDir: SETTINGS.OUTPUT_PATH
		}
	}),

	jquery: new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		'window.jquery': 'jquery'
	}),

	vendor: new webpack.optimize.CommonsChunkPlugin('vendor', SETTINGS.VENDOR_FILE),

	ignoreFiles: function(pattern) {
		return new webpack.IgnorePlugin(pattern);
	},

	environment: new webpack.EnvironmentPlugin(['NODE_ENV']),
	extractCss: new ExtractTextPlugin('[name].css'),

	clean: new WebpackCleanupPlugin()
};

module.exports = {
	test: [plugins.ignoreFiles(/bootstrap/), plugins.jquery],
	dev: [plugins.ignoreFiles(/karma|spec|test/), plugins.jquery, plugins.htmlWebpack, plugins.vendor, plugins.browserSync, plugins.extractCss],
	prod: [plugins.ignoreFiles(/karma|spec|test/), plugins.jquery, plugins.htmlWebpack, plugins.vendor, plugins.uglify, plugins.clean, plugins.extractCss]
};
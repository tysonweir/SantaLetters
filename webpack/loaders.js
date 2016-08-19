var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		test: /\.ts(x?)$/,
		loader: 'ts-loader'
	}, {
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	}, {
		test: /\.scss$/i, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
	}, {
		test: /\.html$/,
		exclude: /node_modules/,
		loader: 'raw'
	}, {
		test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: 'url-loader?limit=10000&mimetype=application/font-woff'
	}, {
		test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
	}, {
		test: '\.png$',
		exclude: /node_modules/,
		loader: 'url'
	},{
    	test: /\.(jpe?g|png|gif|svg)$/i,
    	loader: 'file-loader'
	}
];
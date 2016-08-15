module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		singleRun: true,
		autoWatchBatchDelay: 300,
		files: [
			'node_modules/phantomjs-polyfill/bind-polyfill.js',
			'app/karma.ts'
		],
		preprocessors: {
			'app/karma.ts': ['webpack']
		},
		webpackMiddleware: {
			stats: {
				chunkModules: false,
				colors: true
			}
		},
		webpack: require('./webpack/webpack.config.js')
	});
};
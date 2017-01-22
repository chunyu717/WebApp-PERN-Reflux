var path = require('path');

var webpack = require('webpack');

var config = {
    entry: ['webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/dev-server',
			path.resolve(__dirname, 'app/app.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
			//loaders: ['react-hot', 'babel'],
            loaders: ['react-hot', 'babel-loader'],
			include: path.join(__dirname, 'app')
        }]
    },
	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = config;
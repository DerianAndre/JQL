const path = require('path');
const basePath = __dirname;
const distPath = 'dist';

const webpackInitConfig = {
	mode: 'production',
	resolve: {
		extensions: ['.js'],
		fallback: { 
			fs: false
		}
	},
	entry: {
		app: ['./index.js']
	},
	output: {
		path: path.join(basePath, distPath),
		filename: 'JQL.wp.js'
	}
};

module.exports = webpackInitConfig;
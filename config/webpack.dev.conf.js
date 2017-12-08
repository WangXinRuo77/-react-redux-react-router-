const path = require('path');
const webpack = require('webpack');  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
	entry:{
		"core":path.resolve(__dirname,'../src/index.js'),
		"vendor": ['react','react-dom','react-router-dom']
	},
	devtool:"cheap-module-source-map",
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:"js/[name].[hash].js",
		publicPath: '/',
		// chunkFilename: '[name].[chunkhash:5].chunk.js',
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				loader:"babel-loader",
				exclude:/node_modules/,
			}, 
			{
				test:/\.less/,
				loaders:"style-loader!css-loader!less-loader"
			},
			{
				test:/\.css/,
				loaders:"style-loader!css-loader"
			},			
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:"[name].[hash:8].[ext]",
          outputPath:"images/",
          publicPath:"/"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
        	limit:10000,
          name:"whale.icon.[hash:8].[ext]",
          outputPath:'fonts/',
          publicPath:'/'
        }
      }
		]
	},
	devServer:{
		compress: true,
		hot: true,
		inline: true,
		open: true,
		port: 8089,
		proxy: {

		},	
		stats: {
			colors:true,
			children:false,
	    modules:false,
	    performance:true,
	    timings:true,
	    usedExports:false,
	    version:false,
	    warnings:true,
	    hash:false,
	    assets:false,			
		}
	},
	watchOptions: {
		ignored:/node_modules/
	},
	plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../src/index.html'),
			inject:true,
		}),
		new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
	],
	resolve:{
		alias: {
			"@style": path.resolve(__dirname,'../src/style'),
			"@pages": path.resolve(__dirname,'../src/pages'),
			"@components": path.resolve(__dirname,'../src/components'),
			"@utils": path.resolve(__dirname,'../src/utils'),
			"@image": path.resolve(__dirname,'../static/images'),
			"@actions": path.resolve(__dirname,'../src/actions')
		},
		extensions:[".js",".jsx",".less",".css"],
		modules:['node_modules']
	},
}

const webpack=require('webpack')
module.exports={
	mode:'development',
	 plugins: [
	   new webpack.NamedModulesPlugin(),
	   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
	 ],
	entry:['babel-polyfill','./src/js/index.jsx','./src/css/styles.scss'],
	output:{
		path:`${__dirname}/dist/js`,
		filename:'bundle.js',
		publicPath:'/js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:['env'],
							plugins:['transform-object-rest-spread']
						}
					}
				]
			},
			{
				test:/\.jsx$/,
				exclude:/node_modules/,
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:['env','react'],
							plugins:['transform-object-rest-spread']
						}
					}
				]
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					{
						loader:'css-loader',
						options:{
							url:false
						}
					}
				]
			},
			{
				test:/\.scss$/,
				use:[
					'style-loader',
					{
						loader:'css-loader',
						options:{
							url:false
						}
					},
					'sass-loader'
				]
			}
		]
	},

	resolve:{extensions:['.jsx','.js']},

	devServer:{
		contentBase:'./dist',
		historyApiFallback:true
	},

	devtool:'source-map'


}
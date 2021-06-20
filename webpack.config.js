
//path

const path =require('path')



//set modules
module.exports={
    entry:'./src/App.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'public')
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
           
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,'public'),
        port:3030
    },
   
}
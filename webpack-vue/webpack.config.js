const path = require("path")
// from path import path

const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 뷰 해석

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'main.js')
    },  
    module: {
        rules: [
            {
                test: /\.vue$/,   // 확장자가 뷰일때
                use: 'vue-loader'  // 사용해
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {  // 결과물을 준다.
        filename: 'app.js',  // dist안에 app.js를 넣겠다.
        path: path.join(__dirname, 'dist')
    },
}
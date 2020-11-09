const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: './client', // client.jsx가 WordRelay를 불러와서 client만 적어준다.
    }, // 입력

    module: {
        rules: [{
            test: /.\jsx?$/, //js와 jsx파일에 rule 적용
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { 
                targets: {
                    browsers : ['> 5% in KR', 'last 2 chrome version'], //browserlist
                    },
                    debug : true
                }], '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
            },
        }],
    },
    plugins: [ //추가적으로 하고싶은 작업
        new webpack.LoaderOptionsPlugin({debug:true})
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    } // 출력
}
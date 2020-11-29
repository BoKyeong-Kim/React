const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'responsecheck-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: './client',
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
                    debug : true,
                },], '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ]
            },
        }],
    },
    plugins: [ //추가적으로 하고싶은 작업
        new RefreshWebpackPlugin
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath : '/dist/',
    }, // 출력
    devServer: { //소스코드의 변경점을 확인해줌 
        publicPath : '/dist/',
        hot : true,
    }
}
const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'], // client.jsx가 WordRelay를 불러와서 client만 적어준다.
    }, // 입력

    module: {
        rules: [{
            test: /.\jsx?/, //js와 jsx파일에 rule 적용
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    } // 출력
}
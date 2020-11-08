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
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    } // 출력
}
const express = require('express');
const socketio = require('socket.io'); // http 요청이 느리기때문에 소켓을 사용하는게 좋음
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();

// node.js 애플리케이션 사용, 서버 초기화하여 설정할수있도록 서버를 만들고 express에사 초기화한 해당 앱을 전달해야한다.
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');

    socket.on('disconnect', () =>{
        console.log('User had left!!!');
    }) 
}); //기본 클라이언트 측을 생성하여 실제로 실시간 수신, 연결 및 해제

app.use(router);

//서버가 실행중이므로 수신 대기하는 서버 입력, 포트를 지정해준다.
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
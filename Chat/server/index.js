const express = require('express');
const socketio = require('socket.io'); // http 요청이 느리기때문에 소켓을 사용하는게 좋음
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();

// node.js 애플리케이션 사용, 서버 초기화하여 설정할수있도록 서버를 만들고 express에서 초기화한 해당 앱을 전달해야한다.
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => { //callback함수로 에러 내보기
        const { error, user } = addUser({ id:socket.id, name, room });

        if(error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin' , text: `${user.name}, has joined!`}); //모든 사용자에게 새로운 사람이 접속한 것을 알려줌

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room : user.room, users:getUsersInRoom(user.room)})
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message});
        io.to(user.room).emit('roomData', { room: user.room, users:getUsersInRoom(user.room)});

        callback();
    });

    socket.on('disconnect', () => { //연결 해제 이벤트
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', {user : 'admin', text : `${user.name} has left.`})
        }
    }) 
}); //기본 클라이언트 측을 생성하여 실제로 실시간 수신, 연결 및 해제

app.use(router);

//서버가 실행중이므로 수신 대기하는 서버 입력, 포트를 지정해준다.
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
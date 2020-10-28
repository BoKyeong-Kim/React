import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ( {location} ) => {
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT); //socket의 특정 인스턴스 생성

        setName(name);
        setRoom(room);
        
        socket.emit('join', { name, room }, ({error})=>{
            alert('error!');
        });
        
        return () => { 
            socket.emit('disconnect'); //index.js 연결 해제 이벤트 emit(이름이 같아야함)
        
            socket.off();
        }
    },[ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    // function for sending messages

    return(
        <div className="outerContainer">
            <div className="container">
                <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? setMessage(event) : null}
                />
            </div>
        </div>
    )
}

export default Chat;
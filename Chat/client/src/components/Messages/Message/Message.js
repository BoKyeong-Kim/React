import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message : { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    
    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }
    
    return(
        isSentByCurrentUser 
        ? (
            // 사용자가 메세지를 보냈을 경우
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        : (
            // 메세지를 보내지 않았을 경우
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{trimmedName}</p>
            </div>
        )
    )
}

export default Message;
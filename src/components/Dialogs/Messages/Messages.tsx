import React from 'react';
import mes from "./Message.module.css";

type InMessageType={
    id:number
    message:string
}

type MessagesType={
    messageData:Array<InMessageType>
}

const Messages = (props:MessagesType) => {
    let messageElement=props.messageData.map(m=>(
        <div key={m.id} className={mes.message}>
            {m.message}
        </div>
    ))
    return (
        <div className={`col-9 ${mes.messages}`}>
            {messageElement}
        </div>
    );
};

export default Messages;
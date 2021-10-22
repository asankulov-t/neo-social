import React from 'react';
import m from "./Message.module.css";

type MessagesType={
    message:string
}

const Messages = (props:MessagesType) => {
    return (
        <div className={`col-9 ${m.messages}`}>
            <div className={m.message}>
                {props.message}
            </div>
        </div>
    );
};

export default Messages;
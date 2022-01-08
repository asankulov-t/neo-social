import React, {ChangeEvent} from 'react';
import mes from "./Message.module.css";

type InMessageType = {
    id: number
    message: string
}

type MessagesType = {
    text: string
    messageData: Array<InMessageType>
    sendMessage:(e:string)=>void
    changeMessage:(e:string)=>void
}

const Messages = (props: MessagesType) => {

    const sendMessage = () => {
        props.sendMessage(props.text)
    }

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>props.changeMessage(e.currentTarget.value)

    let messageElement = props.messageData.map(m => (
        <div key={m.id} className={mes.message}>
            {m.message}
        </div>
    ))
    return (
        <div className={`col-9 ${mes.messages}`}>
            {messageElement}
            <div>
                <textarea value={props.text}
                          onChange={changeMessage}></textarea>
                <div>
                    <button onClick={sendMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;
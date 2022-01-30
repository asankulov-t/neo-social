import React, {ChangeEvent} from 'react';
import mes from "./Message.module.css";
import TextAreAndButton from "../../common/TextAreAndButton";

type InMessageType = {
    id: number
    message: string
}

type MessagesType = {
    messageData: Array<InMessageType>
    sendMessage:(e:string)=>void
}

const Messages = (props: MessagesType) => {

    const sendMessage = (e:string) => {
        props.sendMessage(e)
    }

    // const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>props.changeMessage(e.currentTarget.value)

    let messageElement = props.messageData.map(m => (
        <div key={m.id} className={mes.message}>
            {m.message}
        </div>
    ))
    return (
        <div className={`col-9 ${mes.messages}`}>
            {messageElement}
            <div>
                {/*<textarea value={props.text}*/}
                {/*          onChange={changeMessage}></textarea>*/}
                {/*<div>*/}
                {/*    <button onClick={sendMessage}>Add post</button>*/}
                {/*</div>*/}
                <TextAreAndButton title={'Отправить'} message={'message'} callBack={sendMessage}/>
            </div>
        </div>
    );
};

export default Messages;
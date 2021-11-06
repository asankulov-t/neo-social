import React from 'react';
import d from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";


type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type DialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type DialogsPostTypes = {
    text:string
    dialogsData: DialogsDataType
    sendMessage:(messageText:string)=>void
    changeMessageText:(e:string)=>void
}

const Dialog = (props: DialogsPostTypes) => {
    return (
        <div className={`row ${d.dialogs}`}>
            <div className={'col-3'}>
                <DialogItem dialogs={props.dialogsData.dialogs}/>
            </div>
            <Messages
                text={props.text}
                messageData={props.dialogsData.messages}
                sendMessage={props.sendMessage}
                changeMessageText={props.changeMessageText}
            />
        </div>
    );
};

export default Dialog;
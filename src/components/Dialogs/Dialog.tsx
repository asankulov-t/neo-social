import React from 'react';
import d from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogsType, MessageType} from "../redux/store";


type DialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type DialogsPostTypes = {
    text: string
    dialogsData: DialogsDataType
    sendMessage:()=>void
    changeMessage:(e:string)=>void
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
                changeMessage={props.changeMessage}
            />
        </div>
    );
};

export default Dialog;
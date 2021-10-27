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
    dialogsData: DialogsDataType
}

const Dialog = (props: DialogsPostTypes) => {
    return (
        <div className={`row ${d.dialogs}`}>
            <div className={'col-3'}>
                <DialogItem dialogs={props.dialogsData.dialogs}/>
            </div>
            <Messages messageData={props.dialogsData.messages}/>
        </div>
    );
};

export default Dialog;
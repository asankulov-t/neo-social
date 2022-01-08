import React from 'react';
import d from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

// type DialogType = {
//     id: number
//     name: string
// }
// type DialogsDataType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
// }
// type DialogsPostTypes = {
//     text: string
//     dialogsData: DialogsDataType
//     sendMessage:()=>void
//     changeMessage:(e:string)=>void
// }
type MessagesType={
    id:number
    message:string
}

type DoiologType={
    id:number
    name:string
}
type DialogTypes={
    dialogs:Array<DoiologType>
    messageText:string
    messages:Array<MessagesType>
}
type PropsTypes={
    dialogReducer:DialogTypes

}
type ForDialog={
    dialogsData:PropsTypes
    changeMessage:(e:string)=>void
    sendMessage:(e:string)=>void
    text:string

}
const Dialog = (props: ForDialog) => {
    return (
        <div className={`row ${d.dialogs}`}>
            <div className={'col-3'}>
                <DialogItem dialogs={props.dialogsData.dialogReducer.dialogs}/>
            </div>
            <Messages
                text={props.text}
                messageData={props.dialogsData.dialogReducer.messages}
                sendMessage={props.sendMessage}
                changeMessage={props.changeMessage}
            />
        </div>
    );
};

export default Dialog;
import React from 'react';
import {ActionType, DialogsType, MessageType} from "../redux/store";
import {changeMessageAC, sendMessageAC} from "../redux/DialogReducer";
import Dialog from "./Dialog";



type DialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type DialogsContainerTypes={
    text: string
    dialogsData: DialogsDataType
    dispatch: (action: ActionType) => void
}
const DialogsContainer = (props:DialogsContainerTypes) => {
    const sendMessage = () => {
        if (props.text !== '') {
            props.dispatch(sendMessageAC(props.text))
        }
    }
    const changeMessage = (e:string) => props.dispatch(changeMessageAC(e))
    let text=props.text
    let data=props.dialogsData;
    return <Dialog text={text} dialogsData={data}
                   sendMessage={sendMessage}
                   changeMessage={changeMessage}/>
    ;
};

export default DialogsContainer;
import React from 'react';
import d from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {useSelector} from "react-redux";
import {DialogsTypes, StateData} from "../../types/Types";
import {Redirect} from "react-router-dom";

type dialogPropTypes={
    dilogsData:DialogsTypes
    sendMessage:(e:string)=>void
}
const Dialog = (props: dialogPropTypes) => {
    let isAuth=useSelector((state :StateData)=>state.AuthReducer.isAuth)
    if (!isAuth)return <Redirect to={'/login'}/>
    return (
        <div className={`row ${d.dialogs}`}>
            <div className={'col-3'}>
                <DialogItem dialogs={props.dilogsData.dialogs}/>
            </div>
            <Messages
                messageData={props.dilogsData.messages}
                sendMessage={props.sendMessage}
            />
        </div>
    );
};

export default Dialog;
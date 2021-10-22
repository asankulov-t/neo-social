import React from 'react';
import d from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialog = () => {
    return (
        <div className={`row ${d.dialogs}`}>
            <DialogItem name={'Sam'} id={1}/>
            <Messages message={'Hello Samurai'}/>
        </div>
    );
};

export default Dialog;
import React from 'react';
import di from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type InDialogItemTypes = {
    id: number
    name: string
}
type DialogItemTypes = { dialogs: Array<InDialogItemTypes> }

const DialogItem = (props: DialogItemTypes) => {
    let dialogElement = props.dialogs.map(d => <div key={d.id} className={di.item}><NavLink
        to={`/messages/${d.id}`}>{d.name}</NavLink></div>)
    return (
        <div className={di.dialogsItems}>
            {dialogElement}
        </div>
    );
};

export default DialogItem;
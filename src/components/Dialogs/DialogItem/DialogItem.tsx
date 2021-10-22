import React from 'react';
import d from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemTypes={
    name:string
    id:number
}

const DialogItem = (props:DialogItemTypes) => {
    return (
        <div className={`col-3 ${d.dialogsItems}`}>
            <div className={d.item}>
                <NavLink to={`messages/${props.name}/${props.id}`}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default DialogItem;
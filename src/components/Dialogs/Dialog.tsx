import React from 'react';
import d from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

type DialogType={
    id:number,
    name:string
}

let dialogs:Array<DialogType>=[
    {id:1,name:'Arken'},
    {id:2,name:'Adil'},
    {id:3,name:'Miron'},
    {id:4,name:'John'},
    {id:5,name:'Ledy Gaga'},
    {id:6,name:'Johny'},
]

const Dialog = () => {
    let dialogElement=dialogs.map((d,i)=><DialogItem name={d.name} id={d.id}/>)
    return (
        <div className={`row ${d.dialogs}`}>
            {dialogElement}
            <Messages message={'Hello Samurai'}/>
        </div>
    );
};

export default Dialog;
import { sendMessageAC} from "../../redux/DialogReducer";
import Dialog from "./Dialog";
import {useDispatch, useSelector} from "react-redux";
import { StateData } from "../../types/Types";




// type DialogsDataType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessageType>
// }
// type DialogsContainerTypes={
//     text: string
//     dialogsData: DialogsDataType
//     dispatch: (action: ActionType) => void
// }
// const DialogsContainer = (props:DialogsContainerTypes) => {
//     const sendMessage = () => {
//         if (props.text !== '') {
//             props.dispatch(sendMessageAC())
//         }
//     }
//     const changeMessage = (e:string) => props.dispatch(changeMessageAC(e))
//     let text=props.text
//     let data=props.dialogsData;
//     return <Dialog text={text}
//                    dialogsData={data}
//                    sendMessage={sendMessage}
//                    changeMessage={changeMessage}/>
//     ;
// };



// let mapStateToProps=(state:StateData)=>{
//     console.log(state)
//     return{
//         dialogsData:state,
//         text:state.dialogReducer.messageText
//     }
// }
// let mapsDispatchToProps=(dispatch:any)=>{
//     return{
//         changeMessage:(e:string)=>{dispatch(changeMessageAC(e))},
//         sendMessage:(e:string)=>{dispatch(sendMessageAC(e))}
//
//     }
// }
//
//
// const DialogsContainer=connect(mapStateToProps,mapsDispatchToProps)(Dialog);
//
// export default DialogsContainer;


// import React from 'react';
//
// const DialogsContainer = () => {
//     let dialogsData=useSelector((state :StateData)=>state.dialogReducer);
//     let dispatch=useDispatch();
//     let changeMessage=(e:string)=>{
//         dispatch(changeMessageAC(e))
//     }
//     let sendMessage=(e:string)=>{
//         dispatch(sendMessageAC(e))
//     }
//     return <Dialog changeMessage={changeMessage} sendMessage={sendMessage} dilogsData={dialogsData}/>
// };
//
// export default DialogsContainer;

import React from 'react';

const DialogsContainer = () => {
    let dialogData=useSelector((state:StateData)=>state.dialogReducer)
    let dispatch=useDispatch();
    let sendMessage=(e:string)=>{
        dispatch(sendMessageAC(e))
    }
    return <Dialog dilogsData={dialogData} sendMessage={sendMessage}/>
};

export default DialogsContainer;
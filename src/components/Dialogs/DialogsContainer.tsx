import {changeMessageAC, sendMessageAC} from "../../redux/DialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type DialogsTypes = {
    messageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type PostDataType = {
    id: number
    post: string
    likeCount: number
    dislike: number
}

type ProfilePageTypes = {
    newPostText: string
    posts: Array<PostDataType>
}

export type StateData = {
    dialogReducer: DialogsTypes
    profileReducer: ProfilePageTypes
}


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



let mapStateToProps=(state:StateData)=>{
    console.log(state)
    return{
        dialogsData:state,
        text:state.dialogReducer.messageText
    }
}
let mapsDispatchToProps=(dispatch:any)=>{
    return{
        changeMessage:(e:string)=>{dispatch(changeMessageAC(e))},
        sendMessage:(e:string)=>{dispatch(sendMessageAC(e))}

    }
}


const DialogsContainer=connect(mapStateToProps,mapsDispatchToProps)(Dialog);

export default DialogsContainer;
import {ActionType, MessagePageType, MessageType} from "./store";

const DialogReducer = (state:MessagePageType,action:ActionType) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            let newText:MessageType={
                id:3,
                message:action.messageText
            }
            state.messages.push(newText);
            state.messageText=''
            break
        case "CHANGE_MESSAGE_TEXT":
            state.messageText=action.messageText;
            break
        default:return state
    }
};
export const sendMessageAC=(messageText:string)=>{
    return{
        type:'SEND_MESSAGE',
        messageText:messageText
    }
}
export const changeMessageAC=(messageText:string)=>{
    return{
        type:'CHANGE_MESSAGE_TEXT',
        messageText:messageText
    }as const
}
export default DialogReducer;
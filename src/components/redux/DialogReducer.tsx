import {ActionType, MessagePageType, MessageType} from "./store";


let initialState = {
    messageText: 'ds',
    dialogs: [{id: 1, name: 'Arken'},
        {id: 2, name: 'Adil'},
        {id: 3, name: 'Miron'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Ledy Gaga'},
        {id: 6, name: 'Johny'},],
    messages: [{id: 1, message: 'Hello'},
        {id: 2, message: 'How was your day?'},
        {id: 3, message: 'Can I help you'},
        {id: 4, message: 'See you at school'},
        {id: 5, message: 'React Is best Framework'},
        {id: 6, message: 'You must learn Js'},]
}

const DialogReducer = (state: MessagePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            let newText: MessageType = {
                id: 3,
                message: action.messageText
            }
            state.messages.push(newText);
            state.messageText = ''
            return state
        case "CHANGE_MESSAGE_TEXT":
            state.messageText = action.messageText;
            return state
        default:
            return state
    }

};
export const sendMessageAC = (messageText: string) => {
    return {
        type: 'SEND_MESSAGE',
        messageText: messageText
    }
}
export const changeMessageAC = (messageText: string) => {
    return {
        type: 'CHANGE_MESSAGE_TEXT',
        messageText: messageText
    } as const
}
export default DialogReducer;
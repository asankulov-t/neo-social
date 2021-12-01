import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";


export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    post: string
    likeCount: number
    dislike: number
}
export type MessagePageType = {
    messageText: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type ProfilePageTypes = {
    newPostText: string
    posts: Array<PostType>
}
type StateType = {
    dialogPage: MessagePageType
    profilePage: ProfilePageTypes
}

export type ActionType = {
    type: string
    messageText: string
}
export type StoreStateType = {
    _state: StateType
    addPost: (e: string) => void
    changePostText: (e: string) => void
    sendMessage: (e: string) => void
    changeMessageText: (e: string) => void
    _rerender: (e: StateType) => void
    subscriber: (callBack: () => void) => void
    _getState: () => void
    dispatch: (action: ActionType) => void
}
let store: StoreStateType = {
    _state: {
        dialogPage: {
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
        },
        profilePage: {
            newPostText: 'ww',
            posts: [
                {id: 1, post: 'Hello world', likeCount: 5, dislike: 3},
                {id: 2, post: 'I want to be in USA', likeCount: 55, dislike: 0},
                {id: 3, post: 'I am learning js all time', likeCount: 667, dislike: 0},
                {id: 4, post: 'social network is evil', likeCount: 856, dislike: 800},
                {id: 5, post: 'Hello friend lets walk', likeCount: 1250, dislike: 1},
                {id: 6, post: 'It incubator is best courses', likeCount: 1591, dislike: 0},
            ]
        }
    },
    _rerender() {

    },
    addPost(newText: string) {
        let newPost: PostType = {
            id: 1,
            post: newText,
            likeCount: 0,
            dislike: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._rerender(this._state)

    },
    changePostText(e: string) {
        this._state.profilePage.newPostText = e;
        this._rerender(this._state)
    },
    sendMessage(messageText: string) {
        let newText: MessageType = {
            id: 3,
            message: messageText
        }
        this._state.dialogPage.messages.push(newText);
        this._state.dialogPage.messageText = ''
        this._rerender(this._state)

    },
    changeMessageText(e: string) {
        this._state.dialogPage.messageText = e;
        this._rerender(this._state)
    },
    subscriber(observer) {
        this._rerender = observer
    },
    _getState() {
        return this._state
    },
    dispatch(action: ActionType) {
        ProfileReducer(this._state.profilePage, action)
        this._rerender(this._state)
        DialogReducer(this._state.dialogPage, action)
        this._rerender(this._state)
    }
}


export default store
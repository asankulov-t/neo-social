import {Rerender} from "../../Rerender";

type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type PostType = {

    id: number
    post: string
    likeCount: number
    dislike: number
}
type MessagePageType = {
    messageText:string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type ProfilePageTypes = {
    newPostText:string
    posts: Array<PostType>
}
type StateType = {
    dialogPage: MessagePageType
    profilePage: ProfilePageTypes
}


let state: StateType = {
    dialogPage: {
        messageText:'ds',
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
        newPostText:'',
        posts: [
            {id: 1, post: 'Hello world', likeCount: 5, dislike: 3},
            {id: 2, post: 'I want to be in USA', likeCount: 55, dislike: 0},
            {id: 3, post: 'I am learning js all time', likeCount: 667, dislike: 0},
            {id: 4, post: 'social network is evil', likeCount: 856, dislike: 800},
            {id: 5, post: 'Hello friend lets walk', likeCount: 1250, dislike: 1},
            {id: 6, post: 'It incubator is best courses', likeCount: 1591, dislike: 0},
        ]
    }
}

export let addPost=(newText:string)=>{
    let newPost:PostType={
        id:1,
        post:newText,
        likeCount:0,
        dislike:0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText=''
    Rerender(state)
}
export let changePostText=(e:string)=>{
    state.profilePage.newPostText=e;
    Rerender(state)
}

export let sendMessage=(messageText:string)=>{
    let newText:MessageType={
        id:3,
        message:messageText
    }
    state.dialogPage.messages.push(newText);
    state.dialogPage.messageText=''
    Rerender(state)
}
export let changeMessageText=(e:string)=>{
    state.dialogPage.messageText=e;
    Rerender(state)
}

export default state
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
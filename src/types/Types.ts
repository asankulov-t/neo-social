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
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type ProfilePageTypes = {
    posts: Array<PostType>
    profile:null|ProfileType,
    status:string|null
}
type StateType = {
    dialogPage: MessagePageType
    profilePage: ProfilePageTypes
}

export type ActionType = {
    type: string
    messageText: string
    profile:ProfileType
    status:string|null
}
export type locationType={
    country:string,
    city:string
}
export type photoTypes={
    small:string|null
    large:string|null
}
export type UsersType={
    name:string,
    id:number,
    uniqueUrlName:null
    photos:photoTypes
    status:string|null
    followed:boolean
}

export type Users={
    users:Array<UsersType>,
    currentPage:number,
    total:number,
    pageSize:number,
    isFetching:boolean
}
export type FallowAc={
    type:'FALLOW',
    id:number
}
export type UnFallowAc={
    type:'UNFALLOW',
    id:number
}
export type setCurrPage={
    type:'SET_CURRENT_PAGE',
    currentPage:number
}

export type setUser={
    type:'SET_USERS',
    users:Array<UsersType>
}
export type fethingType={
    type:'SET_FETCHING',
    isFething:boolean
}
export type setTotalType={
    type:'SET_TOTAL',
    total:number
}
type DialogType = {
    id: number
    name: string
}

export type DialogsTypes = {
    messageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type StateData = {
    dialogReducer: DialogsTypes
    profileReducer: ProfilePageTypes
    userReducer:Users
    AuthReducer:AuthType
}


export type ContactsType = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}
export type PhotosType = {
    small: string | null;
    large: string | null;
}
export type ProfileType = {
    aboutMe: string | null;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userId: number | null;
    photos: PhotosType;
    status: null|string
}

export type AuthType={
    userId:string|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
}
export type AcAuth={
    type:'SET_USER_DATA',
    data:AuthType
}
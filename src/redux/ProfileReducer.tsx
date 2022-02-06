import {ActionType, PostType, ProfilePageTypes, ProfileType} from '../types/Types';
import {Dispatch} from "redux";
import {PROFILE_API} from "../Api/Api";


let initialState = {
    posts: [
        {id: 1, post: 'Hello world', likeCount: 5, dislike: 3},
        {id: 2, post: 'I want to be in USA', likeCount: 55, dislike: 0},
        {id: 3, post: 'I am learning js all time', likeCount: 667, dislike: 0},
        {id: 4, post: 'social network is evil', likeCount: 856, dislike: 800},
        {id: 5, post: 'Hello friend lets walk', likeCount: 1250, dislike: 1},
        {id: 6, post: 'It incubator is best courses', likeCount: 1591, dislike: 0},
    ],
    profile:null,
    status:'as'
}

const ProfileReducer = (state: ProfilePageTypes = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: 55,
                post: action.messageText,
                likeCount: 0,
                dislike: 0
            }
            return {
                ...state,
                posts:[...state.posts,newPost],
            }
            // let newState={...state}
            // newState.posts=[...state.posts]
            // newState.posts.push(newPost);
            // newState.newPostText = ''
            // return newState
        // case 'CHANGE_POST_TEXT':
        //     return {
        //         ...state,
        //         newPostText:action.messageText
        //     }
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'GET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SAVE_PHOTO':
            return {
                ...state,
                profile:{...state.profile,photos:action.photo}
            }
        default:
            return state
    }
};
export const addPostAC = (newText: string) => {
    return {
        type: 'ADD_POST',
        messageText: newText
    } as const
}

export const SetProfile=(profile:ProfileType)=>{
    return{
        type:'SET_PROFILE',
        profile
    }
}
const setStatus= (status: string|null)=>{
    return{
        type:'GET_STATUS',
        status
    }
}
export const getUserProfile=(id:number)=>{
    return (dispatch:Dispatch)=>{
        PROFILE_API.getUser(id)
            .then(data=>{
                setTimeout(()=>{
                    dispatch(SetProfile(data))
                },500)
            })

    }
}

export const getUserStatus=(id:number)=>{
    return (dispatch:Dispatch)=>{
        PROFILE_API.getStatus(id).then((st)=>{
            dispatch(setStatus(st))
        })
    }
}

export const UpdateStatusGs=(status:string|null)=>{
    return (dispatch:Dispatch)=>{
        PROFILE_API.upDateStatus(status).then(res=>{
            if (res.data.resultCode==0){
                dispatch(setStatus(status))
            }
        })
    }
}
const setPhotoAc=(photo:any)=>{
    return{
        type:'SAVE_PHOTO',
        photo:photo
    }
}
export const SavePhoto=(photo:any)=>{
    return (dispatch:Dispatch)=>{
        PROFILE_API.savePhoto(photo).then(res=>{
            dispatch(setPhotoAc(res.data.data.photos
            ))
        })
    }
}

export default ProfileReducer;
import {ActionType, PostType, ProfilePageTypes} from '../types/Types';

let initialState = {
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
                newPostText: ''
            }
            // let newState={...state}
            // newState.posts=[...state.posts]
            // newState.posts.push(newPost);
            // newState.newPostText = ''
            // return newState
        case 'CHANGE_POST_TEXT':
            return {
                ...state,
                newPostText:action.messageText
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
export const changePostTextAC = (newText: string) => {
    return {
        type: 'CHANGE_POST_TEXT',
        messageText: newText
    } as const
}
export default ProfileReducer;
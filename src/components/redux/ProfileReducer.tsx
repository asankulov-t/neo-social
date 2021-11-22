import {ActionType, PostType, ProfilePageTypes} from './store';

const ProfileReducer = (state:ProfilePageTypes,action:ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: 55,
                post: action.messageText,
                likeCount: 0,
                dislike: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            break
        case 'CHANGE_POST_TEXT':
            state.newPostText = action.messageText;

            break
        default:return state
    }
};
export const addPostAC=(newText:string)=>{
    return {
        type:'ADD_POST',
        messageText:newText
    }as const
}
export const changePostTextAC=(newText:string)=>{
    return {
        type:'CHANGE_POST_TEXT',
        messageText:newText
    }as const
}
export default ProfileReducer;
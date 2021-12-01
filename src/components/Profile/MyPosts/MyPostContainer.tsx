import React from 'react';
import {ActionType, PostType} from "../../redux/store";
import {addPostAC, changePostTextAC} from "../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

type myPostContainerTypes={
    dispatch:(action: ActionType) => void
    postData:Array<PostType>
    newPostText:string
}


const MyPostContainer = (props:myPostContainerTypes) => {
    const addPost = () => {
        if (props.newPostText !== '') {
            props.dispatch(addPostAC(props.newPostText))
            console.log(props.postData)
        }

    }
    const onChangeHendler = (e: string) => props.dispatch(changePostTextAC(e))
    return (<MyPosts newPostText={props.newPostText}
                     onChangeText={onChangeHendler}
                     addPost={addPost}
                     postData={props.postData}
        />
    );
};

export default MyPostContainer;
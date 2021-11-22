import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import p from './MyPosts.module.css'
import {ActionType} from "../../redux/store";
import {addPostAC, changePostTextAC} from "../../redux/ProfileReducer";

type InPostData = {
    id: number
    post: string
    likeCount: number
    dislike: number
}
type MyPostsData = {
    newPostText:string
    postData: Array<InPostData>
    addPost:(newText:string)=>void
    changePostText:(e:string)=>void
    dispatch:(action:ActionType)=>void
}


const MyPosts = (props: MyPostsData) => {

    const addPost=()=>{
            if (props.newPostText!=''){
                props.dispatch(addPostAC(props.newPostText))
                console.log(props.postData)
            }

    }
    const onChangeHendler=(e:ChangeEvent<HTMLTextAreaElement>)=> props.dispatch(changePostTextAC(e.currentTarget.value))

    let postElement = props.postData.map(post => <Post key={post.id}
                                                       postText={post.post}
                                                       like={post.likeCount}
                                                       dislike={post.dislike}/>).reverse()
    return (
        <div className={p.posts}>
            My posts
            <div>
                <textarea value={props.newPostText}
                          onChange={onChangeHendler}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
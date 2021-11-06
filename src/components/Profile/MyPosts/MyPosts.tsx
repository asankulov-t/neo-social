import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import p from './MyPosts.module.css'

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
}


const MyPosts = (props: MyPostsData) => {

    const addPost=()=>{
            if (props.newPostText!=''){
                props.addPost(props.newPostText)
            }
            console.log(props.postData)
    }
    const onChangeHendler=(e:ChangeEvent<HTMLTextAreaElement>)=> props.changePostText(e.currentTarget.value)

    let postElement = props.postData.map(post => <Post postText={post.post}
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
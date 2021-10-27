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
    postData: Array<InPostData>
    addPost:(newText:string)=>void
}


const MyPosts = (props: MyPostsData) => {

    const [text, setText]=useState('')
    const addPost=()=>{
            let newText=text
            props.addPost(newText)
            console.log(props.postData)
    }
    const onChangeHendler=(e:ChangeEvent<HTMLTextAreaElement>)=> setText(e.target.value)

    let postElement = props.postData.map(post => <Post postText={post.post}
                                                       like={post.likeCount}
                                                       dislike={post.dislike}/>)
    return (
        <div className={p.posts}>
            My posts
            <div>
                <textarea ref={text} onChange={onChangeHendler}></textarea>
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
import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import p from './MyPosts.module.css'

type InPostData = {
    id: number
    post: string
    likeCount: number
    dislike: number
}
type MyPostsData = {
    newPostText: string
    postData: Array<InPostData>
    addPost:()=>void
    onChangeText:(e:string)=>void
}


const MyPosts = (props: MyPostsData) => {

    const addPost = () => {
        props.addPost()

    }
    const onChangeHendler = (e: ChangeEvent<HTMLTextAreaElement>) =>props.onChangeText(e.currentTarget.value)

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
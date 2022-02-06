import React, { memo } from 'react';
import Post from "./Post/Post";
import p from './MyPosts.module.css'
import TextAreAndButton from "../../common/TextAreAndButton";

type InPostData = {
    id: number
    post: string
    likeCount: number
    dislike: number
}
type MyPostsData = {
    postData: Array<InPostData>
    addPost:(e:string)=>void
}


const MyPosts =memo( ({postData,addPost}:MyPostsData) => {
    console.log('Render')
    // const addPost = () => {
    //     props.addPost(props.newPostText)
    //
    // }
    // const onChangeHendler = (e: ChangeEvent<HTMLTextAreaElement>) =>props.onChangeText(e.currentTarget.value)

    let postElement =[...postData].map(post => <Post key={post.id}
                                                postText={post.post}
                                                like={post.likeCount}
                                                dislike={post.dislike}/>).reverse()
    return (
        <div className={p.posts}>
            My posts
            <div>
                <TextAreAndButton title={'Опубликовать'} message={'New post'} callBack={addPost}/>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
})
 export default MyPosts;
import React, {ChangeEvent} from 'react';
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


const MyPosts = (props: MyPostsData) => {

    // const addPost = () => {
    //     props.addPost(props.newPostText)
    //
    // }
    // const onChangeHendler = (e: ChangeEvent<HTMLTextAreaElement>) =>props.onChangeText(e.currentTarget.value)

    let postElement = props.postData.map(post => <Post key={post.id}
                                                       postText={post.post}
                                                       like={post.likeCount}
                                                       dislike={post.dislike}/>).reverse()
    return (
        <div className={p.posts}>
            My posts
            <div>
                <TextAreAndButton title={'Опубликовать'} message={'New post'} callBack={props.addPost}/>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
import React from 'react';
import Post from "./Post/Post";
import p from './MyPosts.module.css'
const MyPosts = () => {
    return (
        <div className={p.posts}>
            My posts
            <div>
                <textarea></textarea>
                <div><button>Add post</button></div>
            </div>
            <div>
                <Post like={2530} dislike={15} postText={'Hello I want to go to America'}/>
            </div>
        </div>
    );
};

export default MyPosts;
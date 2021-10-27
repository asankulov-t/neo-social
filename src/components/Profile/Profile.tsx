import React from 'react';
import p from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

type InPostData = {
    id: number
    post: string
    likeCount: number
    dislike: number
}
type PostDataProps = {
    postData: Array<InPostData>
    addPost:(newText:string)=>void
}


const Profile = (props: PostDataProps) => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.wallpict}
                     src="https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg" alt=""/>
            </div>
            <div>
                ava + dess
            </div>
            <MyPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;
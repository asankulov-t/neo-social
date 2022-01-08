import React from 'react';
import p from '../Profile/Profile.module.css'
// import MyPosts from "./MyPosts/MyPosts";
// import {ActionType} from "../redux/store";
import MyPostContainer from "./MyPosts/MyPostContainer";

// type InPostData = {
//     id: number
//     post: string
//     likeCount: number
//     dislike: number
// }
// type PostDataProps = {
//     newPostText: string
//     postData: Array<InPostData>
//     // addPost: (newText: string) => void
//     // changePostText:(e:string)=>void
//     dispatch: (action: ActionType) => void
//
// }


const Profile = () => {

    return (
        <div className={p.content}>
            <div>
                <img className={p.wallpict}
                     src="https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg" alt=""/>
            </div>
            <div>
                ava + dess
            </div>
            <MyPostContainer
            />
        </div>
    );
};
// postData={props.postData}
// dispatch={props.dispatch}
// newPostText={props.newPostText}
export default Profile;
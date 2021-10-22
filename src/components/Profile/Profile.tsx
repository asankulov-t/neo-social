import React from 'react';
import p from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.wallpict} src="https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg" alt=""/>
            </div>
            <div>
                ava + dess
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
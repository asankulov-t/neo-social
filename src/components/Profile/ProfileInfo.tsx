import React from 'react';
import p from "./Profile.module.css";
import {ProfileType} from "../../types/Types";
import ava from '../../assets/ava.jpg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

export type InfoType = {
    profile: ProfileType,
    updateSt:(status:string|null)=>void,
    status:string|null
}
const ProfileInfo = (props: InfoType) => {
    let data={...props.profile}
    return (
        <div >
            <img className={p.wallpict}
                 src="https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4.jpg" alt=""/>
            <div className={p.about}>
                <img className={p.ava} src={data.photos.large ? data.photos.large : ava}
                     alt={data.fullName != null ? data.fullName : 'Photo'}/>
                <div className={p.info}>
                    <p>{data.fullName}</p>
                    <p>{data.aboutMe}</p>
                    <ProfileStatus updateSt={props.updateSt} status={props.status}/>
                    <p><a href={data.contacts.facebook != null ? 'https://'+data.contacts.facebook : ''}
                          target='_self'
                    >{data.contacts.facebook?'Facebook':null}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
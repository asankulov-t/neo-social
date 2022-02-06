import React, {ChangeEvent} from 'react';
import p from "./Profile.module.css";
import {ProfileType} from "../../types/Types";
import ava from '../../assets/ava.jpg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {SavePhoto} from "../../redux/ProfileReducer";
import {useDispatch} from "react-redux";

export type InfoType = {
    profile: ProfileType,
    updateSt:(status:string|null)=>void,
    status:string|null
    isOwner:boolean
}
const ProfileInfo = (props: InfoType) => {
    console.log('is owner '+props.isOwner)
    let data={...props.profile}
    let dispatch=useDispatch();

    let setPhoto=(e:any)=>{
            dispatch(SavePhoto(e.target.files[0]))
    }
    return (
        <div className={p.total}>
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
            {props.isOwner?
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Поменять аватар</label>
                    <input onChange={setPhoto} className="form-control" type="file" id="formFile"/>
                </div>
                :null}
        </div>
    );
};

export default ProfileInfo;
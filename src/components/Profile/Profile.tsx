import React, {useEffect, useState} from 'react';
import p from '../Profile/Profile.module.css'
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile, getUserStatus, UpdateStatusGs,SavePhoto} from '../../redux/ProfileReducer';
import {StateData} from "../../types/Types";
import Loader from "../common/Loader";
import {Redirect, withRouter} from 'react-router-dom';

const Profile = ({match}:any) => {

    let dispatch=useDispatch();
    let myId=useSelector((state:StateData)=>state.AuthReducer.userId);
    let [isOwner,setIsOwner]=useState(false)
    useEffect(()=>{
        let userId=match.params.userId
        if (!userId){
            userId=myId
            setIsOwner(true)
        }
        dispatch(getUserProfile(userId));
        dispatch(getUserStatus(userId))
    },[])
    let profileData=useSelector((state :StateData)=>state.profileReducer.profile);
    let isAuth=useSelector((state :StateData)=>state.AuthReducer.isAuth)
    let status=useSelector((state :StateData)=>state.profileReducer.status)

    let updateFuckingStatus=(status:string|null)=>{
        dispatch(UpdateStatusGs(status))
    }
    if (!isAuth)return <Redirect to={'/login'}/>
    return (
        <div className={p.content}>
            {profileData?<ProfileInfo isOwner={isOwner} status={status} updateSt={updateFuckingStatus} profile={profileData}/>:<Loader/>}
            <MyPostContainer
            />
        </div>
    );
};
export default withRouter(Profile);



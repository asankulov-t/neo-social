import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateData} from "../../types/Types";
import Users from "./Users";
import {
    FallowAC,
    getUsersThunk,
    setCurrentPage,
    setUsers,
    UnFallowAC
} from "../../redux/UsersReducer";
import u from './User.module.css'
import Loader from "../common/Loader";
import { USERS_API} from "../../Api/Api";
import { Redirect } from 'react-router-dom';

const UsersCon = () => {
    let dis=useDispatch();
    let users=useSelector((state:StateData) => state.userReducer.users);
    let currentPage=useSelector((state:StateData) => state.userReducer.currentPage);
    let loader=useSelector((state:StateData) => state.userReducer.isFetching);
    let total=useSelector((state:StateData) => state.userReducer.total);
    let pageSize=useSelector((state:StateData) => state.userReducer.pageSize);
    let resForPage=Math.ceil(total/pageSize);
    let isAuth=useSelector((state :StateData)=>state.AuthReducer.isAuth)
    useEffect(()=>{
                dis(getUsersThunk(currentPage,resForPage))

                // USERS_API.getUsers(currentPage,pageSize)
                //     .then(data=>{
                //     setTimeout(()=>{
                //         dis(setUsers(data.items))
                //         dis(setTotalCount(200))
                //         dis(toggleAc(false))
                //     },1000)
                //
                // })
    },[])

    let pages=[]
    for (let i=1;i<=resForPage;i++){
        pages.push(i)
    }

    const fallowFn=(id:number)=>{
        USERS_API.follow(id)
        .then(data=>{
            if (data.resultCode===0){
                dis(FallowAC(id))
            }
        })
    }

    const unfallowFn=(id:number)=>{
        USERS_API.unFollow(id)
        .then(data=>{
            if (data.resultCode===0){
                dis(UnFallowAC(id))
            }
        })
    }

    const setCurrPage=(p:number)=>{
        dis(setCurrentPage(p));

        USERS_API.setPage(p,resForPage)
        .then(data=>{
            dis(setUsers(data.items))
        })
    }


    let allPages= pages.map((p)=>{
        return(
            <li ><a onClick={()=>setCurrPage(p)} className="page-link" href="#">{p}</a></li>
        )
    })
    if (!isAuth)return <Redirect to={'/login'}/>
    return (
        <div>
            {loader===true?  <div className={u.loader}><Loader/></div>:
               <>
                   <ul className="pagination justify-content-center">
                       {allPages}
                   </ul>
                   <Users users={users} fallowFn={fallowFn} unfallowFn={unfallowFn}/>
               </>
            }


        </div>
    );
};

export default UsersCon;
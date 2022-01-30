import {AcAuth, AuthType} from "../types/Types";
import {Dispatch} from "redux";
import {HEADER_API, LOGIN_API} from "../Api/Api";


let initialState={
    userId:null,
    email:null,
    login:null,
    isAuth:false
}
export  const AuthReducer=(state:AuthType=initialState,action:AcAuth)=>{
    switch (action.type) {
        case "SET_USER_DATA":
            return{
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const AcAuthCreator=(userId:string|null,email:string|null, login:string|null,isAuth:boolean)=>{
    return{
        type:'SET_USER_DATA',
        data:{userId, email, login,isAuth}
    }
}

export const getAuthThunk=(aut:boolean)=>{
    return(dispatch:Dispatch)=>{
        LOGIN_API.getAuth()
            .then(data=>{
                if (data.resultCode===0){
                    let {id, email, login}=data.data;
                    dispatch(AcAuthCreator(id,email,login,aut))
                }
            })
    }
}
export const loginThunk=(email:string,password:string,remember:boolean)=>{
    return(dispatch:any)=>{
        LOGIN_API.login(email,password,remember).then(res=>{
            if (res.data.resultCode==0){
                dispatch(getAuthThunk(true))
            }
        })
    }
}
export const logOutThunk=()=>{
    return(dispatch:any)=>{
        LOGIN_API.logout().then(res=>{
            if (res.data.resultCode===0){
                dispatch(AcAuthCreator(null,null,null,false))
            }
        })
    }
}
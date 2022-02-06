import {AcAuth, AuthType, ErrorLogin} from "../types/Types";
import {Dispatch} from "redux";
import {LOGIN_API} from "../Api/Api";


let initialState={
    userId:null,
    email:null,
    login:null,
    isAuth:false,
    errorMessage:''
}
export  const AuthReducer=(state:AuthType=initialState,action:AcAuth|ErrorLogin)=>{
    switch (action.type) {
        case "SET_USER_DATA":
            return{
                ...state,
                ...action.data
            }
        case "GET_ERROR":
            return {
                ...state,
                errorMessage:action.message
            }
        default:
            return state
    }
}

export const AcAuthCreator=(userId:string|null,
                            email:string|null,
                            login:string|null,
                            isAuth:boolean)=>{
    return{
        type:'SET_USER_DATA',
        data:{userId, email, login,isAuth}
    }
}
export const GetErrorLogin=(message:string|null)=>{
    return{
        type:'GET_ERROR',
        message
    }
}
export const getAuthThunk=()=>{
    return(dispatch:Dispatch)=>{
        LOGIN_API.getAuth()
            .then(data=>{
                if (data.resultCode===0){
                    let {id, email, login}=data.data;
                    dispatch(AcAuthCreator(id,email,login,true))
                }
            })
    }
}
export const loginThunk=(email:string,password:string,remember:boolean)=>{
    return(dispatch:any)=>{
        LOGIN_API.login(email,password,remember).then(res=>{
            if (res.data.resultCode==0){
                dispatch(getAuthThunk())
            }else{
                let message=res.data.messages.length>0?res.data.messages[0]:'Some Error';
                dispatch(GetErrorLogin(message))
            }
        })
    }
}
export const logOutThunk=()=>{
    return(dispatch:Dispatch)=>{
        LOGIN_API.logout().then(res=>{
            if (res.data.resultCode===0){
                dispatch(AcAuthCreator(null,null,null,false))
            }
        })
    }
}
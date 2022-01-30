import {FallowAc, fethingType, setCurrPage, setTotalType, setUser, UnFallowAc, Users} from "../types/Types";
import {Dispatch} from "redux";
import {USERS_API} from "../Api/Api";

let initialState:Users={
  users:[

  ],
  currentPage:1,
  total:0,
  pageSize:15,
  isFetching:true
}



const UsersReducer=(state=initialState, action:FallowAc|UnFallowAc|setUser|setCurrPage|fethingType|setTotalType)=>{
    switch (action.type) {
        case "FALLOW":
            let copyState={...state,users:state.users.map(s=>s.id===action.id?{...s,followed:true}:s)}
            return copyState;
        case "UNFALLOW":
            let unFalloCopy={...state,users:state.users.map(u=>u.id===action.id?{...u,followed:false}:u)}
            return unFalloCopy
        case 'SET_USERS':
            return {...state, users: [...action.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage:action.currentPage}
        case "SET_FETCHING":
            return {...state, isFetching:action.isFething}
        case "SET_TOTAL":
            return {...state, total:action.total}
        default:
            return state
    }
}

export const FallowAC=(id:number):FallowAc=>{
    return{
        type:'FALLOW',
        id
    }
}
export const UnFallowAC=(id:number):UnFallowAc=>{
    return{
        type:'UNFALLOW',
        id
    }
}
export const setUsers=(users:Users)=>{
    return{
        type:'SET_USERS',
        users
    }
}
export const setCurrentPage=(currentPage:number):setCurrPage=>{
    return{
        type:'SET_CURRENT_PAGE',
        currentPage
    }
}
export const toggleAc=(isFething:boolean):fethingType=>{
    return{
        type:'SET_FETCHING',
        isFething
    }
}
export const setTotalCount=(total:number):setTotalType=>{
    return{
        type:'SET_TOTAL',
        total
    }
}

export const getUsersThunk=(currpage:number,pageSize:number)=>{
    // @ts-ignore
    return dispatch=>{
        USERS_API.getUsers(currpage,pageSize)
            .then(data=>{
                    dispatch(setUsers(data.items))
                    dispatch(setTotalCount(200))
                    dispatch(toggleAc(false))
            })
    }
}


export default UsersReducer;

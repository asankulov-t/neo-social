import axios from "axios";

let instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"c52651a7-580b-433b-99e3-876a6eb54318"
    }
})

export const USERS_API={
    getUsers(currentPage:number, resForPage:number){
        return instance.get(`users?page=${currentPage}&count=${resForPage}`)
            .then(res=>res.data)
    },
    follow(id:number){
        return instance.post(`follow/${id}`)
            .then(res=>res.data)
    },
    unFollow(id:number){
        return instance.delete(`follow/${id}`)
            .then(res=>res.data)
    },
    setPage(currpage:number, resforPage:number){
        return instance.get(`users?page=${currpage}&count=${resforPage}`)
            .then(res=>res.data)
    }
}

export const HEADER_API={

}

export const PROFILE_API={
    getUser(id:number){
        return instance.get(`profile/${id}`)
            .then(res=>res.data)
    },
    getStatus(id:number){
        return instance.get(`profile/status/${id}`).then(status=>status.data)
    },
    upDateStatus(status:string|null){
        return instance.put('/profile/status',{status})
    }
}

export const LOGIN_API={
    getAuth(){
        return instance.get('auth/me').then(res=>res.data)
    },
    login(email:string,password:string,remember:boolean){
        return instance.post(`auth/login`,{email,password,rememberMe:remember})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
import {request} from "@/net/requests";

export const $login = query=>{
    return request({
        url:'/users',
        method:'get',
        headers:{
            ...query
        }
    })
}
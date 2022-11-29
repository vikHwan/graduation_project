import axios from "axios";
export function request(config){
    const instance = new axios.create({
        baseURL:' http://127.0.0.1:5173',//本地开发环境
        timeout:3000
    })
    return instance(config)
}
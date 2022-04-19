import JsCookie from "js-cookie";

const TokenKey = 'token';

export const getToken=()=>{
    return JsCookie.get(TokenKey)
}
export const setToken=(token)=>{
    return JsCookie.set(TokenKey,token)
}
export const removeToken = ()=>{
    return JsCookie.remove(TokenKey)
}
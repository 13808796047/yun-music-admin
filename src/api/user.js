import {get} from "./request.js";


export const search = pagination=>{
  return get('/api/users',{params:pagination})
}
export const me = ()=>{
  return get('/api/users/me')
}
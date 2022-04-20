import {post} from "./request.js";

export const authorization = (username,password) => {
    return post('/api/authorizations',{username,password})
}
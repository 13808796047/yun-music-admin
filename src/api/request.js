import axios from "axios";
import store from "../store/index.js";
const baseURL = import.meta.env.VITE_API_HOST;
const instance = axios.create({
    baseURL
})
instance.interceptors.request.use(
    config=>{
        if (store.state.user.token){
            config.headers['Authorization'] = store.state.user.token
        }
        return config
    }
)
const {get,post,put} = instance

export{get,post,put}
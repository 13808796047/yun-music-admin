import {getCurrentUser, getToken, removeCurrentUser, removeToken, setCurrentUser, setToken} from "../../utils/auth.js";
import {authorization} from "../../api/token.js";
import {me} from "../../api/user.js";

const state = () => ({
    token: getToken(),
    currentUser:getCurrentUser(),
})
const getters = {
    currentUser:state=>{

    },
    nicknameFirstWord: state => {
        return state.currentUser?state.currentUser.nickname.slice(0, 1):""
    }
};

const actions = {
    // user login
    login({commit}, {username, password}) {
        return new Promise((resolve, reject) => {
            authorization(username.trim(), password).then(token => {
                commit('SET_TOKEN', token)
                setToken(token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // user logout
    logout({commit}) {
        commit('SET_TOKEN', '')
        commit('SET_CURRENT_USER', '')
        removeToken()
        removeCurrentUser()
    },
    getUser({commit}) {
        return new Promise((resolve, reject) => {
            me().then(res => {
                commit('SET_CURRENT_USER',res)
                setCurrentUser(res)
                resolve(res)
            }).catch(error=>{
                reject(error)
            })
        })
    }
};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_CURRENT_USER:(state,currentUser)=>{
        state.currentUser = currentUser
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
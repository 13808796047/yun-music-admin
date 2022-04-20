import JsCookie from "js-cookie";

const TokenKey = 'token';
const UserKey = 'current-user'
export const getToken = () => {
    return JsCookie.get(TokenKey)
}
export const setToken = (token) => {
    return JsCookie.set(TokenKey, token)
}
export const removeToken = () => {
    JsCookie.remove(TokenKey)
}

export const getCurrentUser = () => {
    return JSON.parse(JsCookie.get(UserKey))
}
export const setCurrentUser = (currentUser) => {
    return JsCookie.set(UserKey, JSON.stringify(currentUser))
}
export const removeCurrentUser = () => {
    JsCookie.remove(UserKey)
}
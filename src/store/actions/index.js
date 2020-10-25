import * as api from '../api';

export const registerUser = (values) => ({
    type:'AUTH_USER',
    payload: api.registerUser(values)
})

export const loginUser = (values) => ({
    type:'AUTH_USER',
    payload: api.loginUser(values)
})

export const autoSignIn = () => ({
    type:'AUTH_USER',
    payload: api.autoSignIn()
})

export const logoutUser = () => ({
    type:'LOGOUT_USER',
    payload: api.logoutUser()
})

export const updateUserData = (values,user) => ({
    type:'UPD_USER_DATA',
    payload: api.updateUserData(values,user)
})



export const clearAuthError = () => ({
    type:'CLEAR_AUTH_ERROR'
})
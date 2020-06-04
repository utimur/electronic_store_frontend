import axios from "axios";
import {API_URL} from "../config";
import {setDeviceTypes} from "./device";

export const auth = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/auth`)
            .then(response => {
                dispatch({type:"AUTH", payload: response.data.user})
                localStorage.setItem("token", response.data.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
                isAdminCheck(response.data.user, dispatch)
            }).then(response => dispatch(setDeviceTypes()))
    }
}

export const login = (usernameRef, passwordRef) => {
    return (dispatch) => {
        axios.post(`${API_URL}/auth/login`, {
            username: usernameRef.current.value,
            password:passwordRef.current.value
        } , {
            headers:{
                Authorization:""
            }
        })
            .then(response => {
                dispatch({type:"AUTH", payload: response.data.user})
                localStorage.setItem("token", response.data.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
                isAdminCheck(response.data.user, dispatch)
            })
            .catch(error =>alert(error))
    }
}


export const registration = (user) => {
    return (dispatch) => {
        axios.post(`${API_URL}/auth/registration`, {
            ...user
        } , {
            headers:{
                Authorization:""
            }
        })
            .then(response => {
                dispatch({type:"AUTH", payload: response.data.user})
                localStorage.setItem("token", response.data.token)
                isAdminCheck(response.data.user, dispatch)
            })
            .catch(error =>alert(error))
    }
}

const isAdminCheck = (user, dispatch) => {
    user.roles.forEach(role => {
        if (role.role == "ROLE_ADMIN") {
            dispatch({type:"SET_ADMIN"})
        }
    })
}
import axios from "axios";
import {API_URL} from "../config";

export const auth = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/auth`)
            .then(response => {
                dispatch({type:"AUTH", payload: response.data.user})
                localStorage.setItem("token", response.data.token)
            })
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
            })
            .catch(error =>alert(error))
    }
}
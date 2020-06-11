import axios from "axios";
import {API_URL} from "../config";
import {setDeviceTypes} from "./device";

export const auth = () => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.get(`${API_URL}/auth`, {headers:{Authorization: Authorization}})
            .then(response => {
                dispatch({type:"AUTH", payload: response.data.user})
                localStorage.setItem("token", response.data.token)
                isAdminCheck(response.data.user, dispatch)
            }).then(response => dispatch(setDeviceTypes()))
    }
}

export const login = (usernameRef, passwordRef) => {
    return (dispatch) => {
        axios.post(`${API_URL}/auth/login`, {
            username: usernameRef.current.value,
            password:passwordRef.current.value
        })
            .then(response => {
                dispatch({type:"AUTH", payload: response.data.user})
                localStorage.setItem("token", response.data.token)
                isAdminCheck(response.data.user, dispatch)
            })
            .catch(error =>alert(error))
    }
}


export const registration = (user) => {
    return (dispatch) => {
        axios.post(`${API_URL}/auth/registration`, {...user})
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

export const setAvatar = (id, file) => {
    const formData = new FormData()
    formData.append("img", file);
    formData.append("user_id", id);
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.post(`${API_URL}/users/avatar`, formData,  {headers:{Authorization: Authorization}})
            .then(response => dispatch({type:"SET_AVATAR", payload: response.data.avatar}))
            .catch(error => alert(error))
    }
}
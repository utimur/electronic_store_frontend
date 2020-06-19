import axios from "axios";
import {API_URL} from "../config";
import {getDeviceTypes} from "./device";

export const auth = () => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.get(`${API_URL}/auth`, {headers:{Authorization: Authorization}})
            .then(response => {
                dispatch({type:"AUTH", payload: response.data.user})
                localStorage.setItem("token", response.data.token)
                isAdminCheck(response.data.user, dispatch)
                localStorage.setItem("id", response.data.user.id)
            })
            .then(response => dispatch(getDeviceTypes()))
            .catch(error => localStorage.setItem("id", 0))
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
                localStorage.setItem("id", response.data.user.id)

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
                localStorage.setItem("id", response.data.user.id)
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

export const recoverPassword = (pass1, pass2, token, history) => {
    if (pass1 != pass2) {
        alert("Пароли не равны");
        return
    }
    return async (dispatch) => {
        const response = await axios.post(`${API_URL}/mail/password`, {password:pass1}, {headers:{Authorization:`Bearer ${token}`}})
        localStorage.setItem("token", response.data.token)
        history.push("/store")
        dispatch(auth());
    }
}

export const sendMail = (mail) => {
        return axios.get(`${API_URL}/mail/recovery?mail=${mail}`)
}
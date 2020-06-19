import axios from 'axios';
import {API_URL, } from "../config";
import {addComment, like, setCurrentDevice, setDeviceTypes} from "../reducers/deviceReducer";

export const getDeviceTypes = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_URL}/devices/type`)
            dispatch(setDeviceTypes(response.data))
        }   catch (e) {
            alert(e)
        }
    }
}

export const addDeviceType = (deviceTypeName) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return async (dispatch) => {
        axios.post(`${API_URL}/admin/devices/type`, {name: deviceTypeName},  {headers:{Authorization: Authorization}})
            .then(response => dispatch({type: "ADD_DEVICE_TYPE", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const deleteDeviceType = (deviceTypeName) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.delete(`${API_URL}/admin/devices/type?name=${deviceTypeName}`,  {headers:{Authorization: Authorization}})
            .then(response => dispatch({type: "DELETE_DEVICE_TYPE", payload: deviceTypeName}))
            .catch(error => alert(error))
    }
}


export const setBrands = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/devices/brand`)
            .then(response => dispatch({type:"SET_BRANDS", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const addBrand = (brandName, deviceTypeName) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.post(`${API_URL}/admin/devices/brand`, {
            name: brandName,
            deviceTypeName: deviceTypeName
        },  {headers:{Authorization: Authorization}})
            .then(response => dispatch({type: "ADD_BRAND", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const deleteBrand = (brandName, deviceTypeName) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.delete(`${API_URL}/admin/devices/brand?name=${brandName}&type_name=${deviceTypeName}`,  {headers:{Authorization: Authorization}})
            .then(response => dispatch({type: "DELETE_BRAND", payload: {brandName, deviceTypeName}}))
            .catch(error => alert(error.message))
    }
}




export const setDevices = (page, typeId = 0, brandId = 0, countOnPage=9 ) => {
    return (dispatch) => {
        axios.get(`${API_URL}/devices/pagination?page=${page}&count=${countOnPage}&type_id=${typeId}&brand_id=${brandId}` )
            .then(response => dispatch({type:"SET_DEVICES", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const getAllDevices = () => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.get(`${API_URL}/admin/devices`, {headers:{Authorization: Authorization}} )
            .then(response => dispatch({type:"SET_DEVICES", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const setDevicesByType = (typeId) => {
    return (dispatch) => {
        axios.get(`${API_URL}/devices/${typeId}`)
            .then(response => dispatch({type:"SET_DEVICES", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const setDevicesByBrand = (typeId, brandId) => {
    return (dispatch) => {
        axios.get(`${API_URL}/devices/${typeId}/${brandId}`)
            .then(response => dispatch({type:"SET_DEVICES", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const addDevice = (device) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    const formData = new FormData()
    formData.append("name", device.name)
    formData.append("price", device.price)
    formData.append("brandName", device.brandName)
    formData.append("typeName", device.typeName)
    formData.append("description", device.description)
    formData.append("file", device.file)
    return (dispatch) => {
        axios.post(`${API_URL}/admin/devices`, formData,  {headers:{Authorization: Authorization}})
            .then(response => dispatch({type: "ADD_DEVICE", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const setBrandsVisible = (bool) => {
    return (dispatch) => {
        dispatch({type:"SET_BRANDS_VISIBLE", payload:bool})
    }
}

export const setSelectedType = (type) => {
    return (dispatch) => {
        dispatch({type:"SET_SELECTED_TYPE", payload:type})
    }
}

export const setCurrentPage = (page) => {
    return (dispatch) => {
        dispatch({type:"SET_CURRENT_PAGE", payload:page})
    }
}

export const getCurrentDevice = (id, userId) => {
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/devices/${id}?user_id=${userId}`)
        dispatch(setCurrentDevice(response.data))
    }
}

export const addProperty = (typeName, brandName, deviceName, name, description) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    axios.post(`${API_URL}/admin/devices/property`, {
        typeName:typeName,
        brandName: brandName,
        deviceName: deviceName,
        name: name,
        description: description,
    }, {headers: {Authorization: Authorization}})
        .then(response => console.log(response.data))
        .catch(error => alert(error))
}

export const sendComment = (deviceId, userId, rate, text) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`
    return (dispatch) => {
        axios.post(`${API_URL}/comments/add`, {
            device:{id:deviceId},
            user: {id: userId},
            rating: rate,
            text: text,
        }, {headers: {Authorization: Authorization}})
            .then(response => dispatch(addComment(response.data)))
            .catch(error => alert(error))
    }
}

export const setLike = (userId, commentId, setLikes, setIsLiked) => {
    const Authorization = `Bearer ${localStorage.getItem("token")}`

    axios.post(`${API_URL}/comments/like`, {
        comment:{id:commentId},
        user: {id: userId},
    }, {headers: {Authorization: Authorization}})
        .then(response => {
            setLikes(response.data.likeCount)
            setIsLiked(response.data.isLiked)
        })
        .catch(error => alert(error))
}

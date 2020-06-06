import axios from 'axios';
import {API_URL} from "../config";

export const setDeviceTypes = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/devices/type`)
            .then(response => dispatch({type:"SET_DEVICE_TYPES", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const addDeviceType = (deviceTypeName) => {
    return (dispatch) => {
        axios.post(`${API_URL}/admin/devices/type`, {name: deviceTypeName})
            .then(response => dispatch({type: "ADD_DEVICE_TYPE", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const deleteDeviceType = (deviceTypeName) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/admin/devices/type?name=${deviceTypeName}`)
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
    return (dispatch) => {
        axios.post(`${API_URL}/admin/devices/brand`, {
            name: brandName,
            deviceTypeName: deviceTypeName
        })
            .then(response => dispatch({type: "ADD_BRAND", payload: response.data}))
            .catch(error => alert(error))
    }
}

export const deleteBrand = (brandName, deviceTypeName) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/admin/devices/brand?name=${brandName}&type_name=${deviceTypeName}`)
            .then(response => dispatch({type: "DELETE_BRAND", payload: {brandName, deviceTypeName}}))
            .catch(error => alert(error.message))
    }
}




export const setDevices = (page, typeId = 0, brandId = 0 ) => {
    return (dispatch) => {
        axios.get(`${API_URL}/devices/pagination?page=${page}&type_id=${typeId}&brand_id=${brandId}`)
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
    const formData = new FormData()
    formData.append("name", device.name)
    formData.append("price", device.price)
    formData.append("brandName", device.brandName)
    formData.append("typeName", device.typeName)
    formData.append("file", device.file)
    return (dispatch) => {
        axios.post(`${API_URL}/admin/devices`, formData)
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


const defaultState = {
    devices: [],
    deviceTypes:[],
    brands:[]
}


export default function deviceReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_DEVICES":
            return {
                ...state,
                devices: [...action.payload]
            }
        case "ADD_DEVICE":
            return {
                ...state,
                devices: [...state.devices, action.payload]
            }
        case "ADD_BRAND":
            return {
                ...state,
                brands: [...state.brands, action.payload]
            }
        case "SET_BRANDS":
            return {
                ...state,
                brands: [...action.payload]
            }
        case "ADD_DEVICE_TYPE":
            return {
                ...state,
                deviceTypes: [...state.deviceTypes, action.payload]
            }
        case "SET_DEVICE_TYPES":
            return {
                ...state,
                deviceTypes: [...action.payload]
            }
        default:
            return {...state}
    }
}
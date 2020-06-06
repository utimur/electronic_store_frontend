const defaultState = {
    devices: [],
    deviceTypes:[],
    brands:[],
    isBrandsVisible:false,
    selectedType:"",
    currentPage: 1,
    totalCount: 0,
    countOnPage:9,
}


export default function deviceReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_DEVICES":
            return {
                ...state,
                devices: [...action.payload.devices],
                totalCount: action.payload.totalCount,
            }
        case "ADD_DEVICE":
            return {
                ...state,
                devices: [...state.devices, action.payload],
                totalCount: state.totalCount+1
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
        case "DELETE_BRAND":
            return {
                ...state,
                brands: state.brands.filter(brand => brand.name != action.payload.brandName
                    && brand.deviceTypeName != action.payload.deviceTypeName )
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
        case "DELETE_DEVICE_TYPE":
            return {
                ...state,
                deviceTypes: state.deviceTypes.filter(type => type.name != action.payload )
            }
        case "SET_BRANDS_VISIBLE":
            return {
                ...state,
                isBrandsVisible: action.payload
            }
        case "SET_SELECTED_TYPE":
            return {
                ...state,
                selectedType: action.payload
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.payload
            }
        default:
            return {...state}
    }
}
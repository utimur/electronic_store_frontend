const defaultState = {
    isAuth: false,
    currentUser:{}
}

export default function userReducer(state = defaultState, action){
    switch (action.type) {
        case "AUTH":
            return {
                ...state,
                isAuth: true,
                currentUser: action.payload
            }
        case "LOGOUT":
            localStorage.setItem("token", null)
           return defaultState
        default:
            return state;
    }
}
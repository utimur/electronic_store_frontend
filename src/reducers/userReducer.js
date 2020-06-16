const defaultState = {
    isAuth: false,
    currentUser:{id:0,},
    isAdmin: false,
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
            localStorage.setItem("id", null)
           return defaultState
        case "SET_ADMIN":
            return {
                ...state,
                isAdmin: true
            }
        case "SET_AVATAR":
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    avatar: action.payload
                }
            }
        default:
            return state;
    }
}
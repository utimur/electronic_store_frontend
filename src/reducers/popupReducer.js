const SET_TEXT = "SET_TEXT"
const SET_VISIBLE = "SET_VISIBLE"


const defaultState = {
    isVisible: false,
    text: ""
}


export default function popupReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                text: action.payload,
                isVisible: true,
            }
        case SET_VISIBLE:
            return {
                ...state,
                isVisible: action.payload
            }
        default:
            return state
    }
}

export const setPopupText = (text) => ({type:SET_TEXT, payload: text})
export const setPopupVisible = (bool) => ({type:SET_VISIBLE, payload: bool})


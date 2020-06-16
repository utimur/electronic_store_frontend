export const SET_BASKET = "SET_BASKET"

const defaultState = {
    basket:{}
}


export default function basketReducer(state = defaultState, action) {
    switch (action.type) {

        case SET_BASKET:
            return {
                ...state,
                basket: action.payload
            }

        default:
            return state
    }
}

export const setBasket = (payload) => ({type:SET_BASKET, payload: payload})
import popupReducer from "./popupReducer";

export const SET_BASKET = "SET_BASKET"
export const REMOVE_DEVICE = "REMOVE_DEVICE"
export const ADD_BASKET = "ADD_BASKET"

const defaultState = {
    basket:JSON.parse(localStorage.getItem("basket")) != null ? [...JSON.parse(localStorage.getItem("basket"))] : []
}


export default function basketReducer(state = defaultState, action) {
    switch (action.type) {

        case SET_BASKET:
            return {
                ...state,
                basket: action.payload
            }
        case ADD_BASKET:
            const basketStorage = JSON.parse(localStorage.getItem("basket"))
            const count = JSON.parse(localStorage.getItem("count"))
            if(count == 0 || count === null) {
                localStorage.setItem("basket", JSON.stringify([action.payload]));
                localStorage.setItem("count", 1);
            }
            if (basketStorage.filter(elem => elem.id == action.payload.id).length >= 1) {
                alert("Устройство уже добавлено в вашу корзину")
                return {
                    ...state,
                }
            } else {
                localStorage.setItem("basket", JSON.stringify([...basketStorage,action.payload]));
                localStorage.setItem("count", JSON.stringify(count+1));
            }
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case REMOVE_DEVICE:
            const basketStorage2 = JSON.parse(localStorage.getItem("basket"))
            const countStorage2 = JSON.parse(localStorage.getItem("count"))
            localStorage.setItem("basket", JSON.stringify([...basketStorage2.filter(elem => elem.id != action.payload.id)]));
            localStorage.setItem("count", countStorage2-1)
            return {
                ...state,
                basket: state.basket.filter(device => device.id != action.payload.id)
            }
        default:
            return state
    }
}

export const setBasket = (payload) => ({type:SET_BASKET, payload: payload})
export const removeDeviceFromBasket = (payload) => ({type:REMOVE_DEVICE, payload: payload})
export const addDeviceToBasket = (payload) => ({type:ADD_BASKET, payload: payload})
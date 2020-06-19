import React from "react";
import "./device.css";
import {useDispatch} from "react-redux";
import {addDeviceToBasket, removeDeviceFromBasket} from "../../../reducers/basketReducer";
import {setPopupText, setPopupVisible} from "../../../reducers/popupReducer";

const Device = (props) => {
    const device = props.device
    const dispatch = useDispatch()

    function addBasketClick() {
        dispatch(addDeviceToBasket(device))
        dispatch(setPopupText("Товар успешно добавлен в корзину"))
    }

    function removeBasketClick() {
        dispatch(removeDeviceFromBasket(device))
        dispatch(setPopupText("Товар успешно удален из корзины"))
    }

    return (
        <div className="device">
            <div className="device-flex">
                <div className="device-flex-btns">
                    <div className={props.basket == true ? "device-flex-btns-delete" : "device-flex-btns-basket"}
                                          onClick={props.basket ? ()=> removeBasketClick() : ()=>addBasketClick()}/>
                </div>
                <img src={`data:image/jpeg;base64,${device.image}`} onClick={()=>props.history.push(`/device/${device.id}`)} alt="asfafs"/>
                <div className="device-flex-desc">
                    <div className="device-flex-desc-brand">{device.brandName}</div>
                    <div className="device-flex-desc-star"/>
                    <div className="device-flex-desc-rate">{device.rating.toFixed(1)}</div>
                </div>
                <div className="device-flex-name">{device.name}</div>
                <div className="device-flex-price">{device.price}р.</div>
            </div>
        </div>
    );
}

export default Device;

import React from "react";
import "./deviceMain.css";
import img from '../../../assets/img/notebook.jpg'
import {useDispatch, useSelector} from "react-redux";
import {addDeviceToBasket, removeDeviceFromBasket} from "../../../reducers/basketReducer";

const DeviceMain = (props) => {

    const currentDevice = useSelector(state => state.deviceReducer.currentDevice)
    const devices = useSelector(state => state.basketReducer.basket)
    const dispatch = useDispatch()

    function addBasketClick() {
        dispatch(addDeviceToBasket(currentDevice))
    }
    function removeBasketClick() {
        dispatch(removeDeviceFromBasket(currentDevice))
    }
    return (
        <div className="device-top">
            <div className="device-top-flex">
                <div className="device-top-flex-left">
                    <div className="device-top-name"> {currentDevice.brandName} {currentDevice.name}</div>
                    <img src={`data:image/jpeg;base64,${currentDevice.image}`} alt=""/>
                    <div className="device-top-flex-left-bottom">
                        <div className="device-top-flex-left-bottom-img"/>
                        <div className="device-top-flex-left-bottom-rate">{currentDevice.rating.toFixed(1)}</div>
                        <div className="device-top-flex-left-bottom-comments">отзывов: {currentDevice.comments.length}</div>
                    </div>
                </div>
                <div className="device-top-flex-right">
                    <div className="device-top-flex-right-price">{currentDevice.price} руб.</div>
                    <div onClick={devices.filter(device => device.id == currentDevice.id).length == 0 ? ()=>addBasketClick() : ()=> removeBasketClick()} className="device-top-flex-right-basket">
                        {devices.filter(device => device.id == currentDevice.id).length == 0 ? "Добавить в корзину" : "Удалить из корзины"}
                    </div>
                    <div onClick={()=>props.history.push("/order")} className="device-top-flex-right-basket">Оформить заказ</div>
                </div>
            </div>
        </div>
    )
}

export default DeviceMain;
import React from "react";
import "./deviceMain.css";
import img from '../../../assets/img/notebook.jpg'
import {useSelector} from "react-redux";
const DeviceMain = () => {

    const currentDevice = useSelector(state => state.deviceReducer.currentDevice)


    return (
        <div className="device-top">
            <div className="device-top-flex">
                <div className="device-top-flex-left">
                    <div className="device-top-name"> {currentDevice.brandName} {currentDevice.name}</div>
                    <img src={`data:image/jpeg;base64,${currentDevice.image}`} alt=""/>
                    <div className="device-top-flex-left-bottom">
                        <div className="device-top-flex-left-bottom-img"/>
                        <div className="device-top-flex-left-bottom-rate">{currentDevice.rating}</div>
                        <div className="device-top-flex-left-bottom-comments">{currentDevice.comments.length} отзывов</div>
                    </div>
                </div>
                <div className="device-top-flex-right">
                    <div className="device-top-flex-right-price">{currentDevice.price} руб.</div>
                    <div className="device-top-flex-right-basket">Добавить в корзину</div>
                    <div className="device-top-flex-right-favour">Добавить в избранное</div>
                </div>
            </div>
        </div>
    )
}

export default DeviceMain;
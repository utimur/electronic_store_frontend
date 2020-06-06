import React from "react";
import "./device.css";
import logo from  '../../../assets/img/iphone.jpg'

const Device = (props) => {
    const device = props.device

    return (
        <div className="device">
            <div className="device-flex">
                <div className="device-flex-btns">
                    <div className="device-flex-btns-basket"></div>
                    <div className="device-flex-btns-favour"></div>
                </div>
                <img src={`data:image/jpeg;base64,${device.image}`} alt="asfafs"/>
                <div className="device-flex-desc">
                    <div className="device-flex-desc-brand">{device.brandName}</div>
                    <div className="device-flex-desc-star"/>
                    <div className="device-flex-desc-rate">{device.rating}</div>
                </div>
                <div className="device-flex-name">{device.name}</div>
                <div className="device-flex-price">{device.price}р.</div>
            </div>
        </div>
    );
}

export default Device;

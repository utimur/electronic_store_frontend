import React from "react";
import './basket.css';
import Device from "../store/device/Device";

const Basket = (props) => {

    const devices = JSON.parse(localStorage.getItem("basket"));

    return (
        <div className="devices">
            {devices.map(device =>
                <Device basket={true} history={props.history} device={device}/>
            )}
        </div>
    )
};

export default Basket;
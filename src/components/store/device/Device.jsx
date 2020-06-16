import React from "react";
import "./device.css";

const Device = (props) => {
    const device = props.device

    function addBasketClick() {
        const basket = JSON.parse(localStorage.getItem("basket"))
        const count = JSON.parse(localStorage.getItem("count"))
        console.log(basket)
        console.log(count)
        if(count == 0 || count === null) {
            localStorage.setItem("basket", JSON.stringify(device));
            localStorage.setItem("count", (1));
            return
        }
        if(count == 1) {
            if(basket.id == device.id) {
                alert("Устройство уже добавлено в вашу корзину")
            } else {
                localStorage.setItem("basket", JSON.stringify([basket,device]));
                localStorage.setItem("count", JSON.stringify(count+1));
            }
            return
        }
        if (basket.filter(elem => elem.id == device.id).length >= 1) {
            alert("Устройство уже добавлено в вашу корзину")
        } else {
            localStorage.setItem("basket", JSON.stringify([...basket,device]));
            localStorage.setItem("count", JSON.stringify(count+1));
        }
    }

    function removeBasketClick() {
        const basket = JSON.parse(localStorage.getItem("basket"))
        const count = JSON.parse(localStorage.getItem("count"))
        localStorage.setItem("basket", [...basket.filter(elem => elem.id == device.id)])
        localStorage.setItem("count", count-1)
        console.log(localStorage.getItem("basket"))
    }

    return (
        <div className="device">
            <div className="device-flex">
                <div className="device-flex-btns">
                    <div className="device-flex-btns-basket" onClick={props.basket ? ()=> removeBasketClick() : ()=>addBasketClick()}></div>
                    <div className="device-flex-btns-favour"></div>
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

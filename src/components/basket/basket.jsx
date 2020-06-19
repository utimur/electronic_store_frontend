import React, {useEffect} from "react";
import './basket.css';
import Device from "../store/device/Device";
import {useDispatch, useSelector} from "react-redux";
import {setBasket} from "../../reducers/basketReducer";
import basketLogo from  "../../assets/img/busket.svg"

const Basket = (props) => {

    const devices = useSelector(state => state.basketReducer.basket)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))))
    }, [])

    console.log(devices)
    return (
        devices != null && devices.length != 0 ?
            <div className="basket">
                <h1>Корзина</h1>
                <div className="devices">
                    {devices.map(device =>
                        <Device basket={true} history={props.history} device={device}/>
                    )}
                </div>
            </div>
            :
            <div className="empty">
                <h1>Корзина пуста</h1>
                <img src={basketLogo} alt=""/>
                <div className="empty-rect-1 empty-rect"></div>
                <div className="empty-rect-2 empty-rect"></div>
                <div className="empty-rect-3 empty-rect"></div>
            </div>
    )
};

export default Basket;
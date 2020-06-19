import React from 'react';
import "./order.css";
import {useSelector} from "react-redux";
import Button from "../../utils/button/Button";
import Input from "../../utils/input/Input";

const Order = (props) => {

    const isAuth = useSelector(state => state.userReducer.isAuth)


    return (
        <div className="order">
            <div className="header">Оформить заказ</div>
            <div className="order-flex">
                <div className="image">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <span></span>
                    <div className="circle">
                    </div>
                    <div className="tick"></div>
                </div>
                {isAuth ?
                    <div className="order-form">
                        <div className="order-header">Контактные данные</div>
                        <Input margin="10px" width="100%" placeholder="Адрес"/>
                        <Input margin="10px" width="100%" placeholder="Номер телефона"/>
                        <Input margin="10px" width="100%"  placeholder="Дата доставки"/>
                        <textarea placeholder="Оставить комментарий к заказу" ></textarea>
                        <Button text="Перейти к оплате"/>
                    </div>
                    :
                    <div className="order-auth">
                        <p>Для оформления заказа необходимо авторизоваться</p>
                        <Button click={()=> props.history.push("/login")} text="Войти"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default Order;
import React from "react";
import "./rating.css";
import {useSelector} from "react-redux";
import Button from "../../../../utils/button/Button";

const Rating = (props) => {

    const currentDevice = useSelector(state => state.deviceReducer.currentDevice)

    return (
        <div>
            <div className="header">Рейтинг</div>
            <div className="rating">
                <div className="rating-img">
                    <div className="rating-img-rate">{currentDevice.rating.toFixed(1)}</div>
                </div>
                <div className="rating-info">
                    {currentDevice.rating != 0 ? <p>{currentDevice.rating > 3.5 ? "Товар с положительными оценками" : "Товар с отрицательными оценками"}</p>
                        : <p>Пользователи не оценили данный товар</p>
                    }
                    <p>Рекомендуют 5</p>
                    <p>Не рекомендуют 3</p>
                    <Button click={()=>window.scrollTo(0, document.body.scrollHeight)} text="Оставить отзыв"/>
                </div>
            </div>
        </div>
    );
}

export default Rating;
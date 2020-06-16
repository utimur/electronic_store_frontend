import React, {useRef, useState} from "react";
import "./commentCreator.css";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../../../utils/button/Button";
import purpleStar from "../../../../assets/img/star.png";
import grayStar from "../../../../assets/img/gray-star.png";
import {sendComment} from "../../../../actions/device";


const CommentCreator = (props) => {

    const isAuth = useSelector(state => state.userReducer.isAuth)
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const currentDevice = useSelector(state => state.deviceReducer.currentDevice)
    const [starsCount, setStarsCount] = useState(1)
    const stars = []
    const textRef = useRef();
    const dispatch = useDispatch()

    for (let i = 1; i <= 5; i++) {
        stars.push(i)
    }

    function loginClick() {
        props.history.push("/login")
    }


    function starFocus(star) {
        setStarsCount(star)
        console.log(star)
    }

    function sendCommentClick() {
        dispatch(sendComment(currentDevice.id, currentUser.id, starsCount, textRef.current.value))
    }

    return (
        isAuth ?
            <div className="creator" id="comment-creator">
                <div className="header">Написать отзыв</div>
                <div className="creator-rate">
                    Оцените товар
                    {stars.map(star => {
                        { return star <= starsCount ?
                            <img
                                 onMouseOver={()=>starFocus(star)}
                                 onClick={()=>setStarsCount(star)}
                                 src={purpleStar} alt=""/>
                            :
                            <img
                                 onMouseOver={()=>starFocus(star)}
                                 onClick={()=>setStarsCount(star)}
                                 src={grayStar} alt=""/>}
                    })}
                </div>
                <textarea ref={textRef} placeholder="Напишите отзыв..."/>
                <Button click={sendCommentClick} text="Отправить отзыв"/>
            </div>
            :
            <div className="comment-auth">
                <p>Ваш отзыв может помочь другим покупателям выбрать товар!</p>
                <p>Чтобы оставить отзыв необходимо авторизоваться</p>
                <Button click={loginClick} text="Войти"/>
            </div>
    )
}

export default CommentCreator;
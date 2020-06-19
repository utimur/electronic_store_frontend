import React, {useEffect, useRef} from "react";
import "./registration.css";
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../actions/user";

const Registration = (props) => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const mailRef = useRef()
    const numberRef = useRef()
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userReducer.isAuth)

    useEffect(()=>{
        if(isAuth) {
            props.history.push("/")
        }
    }, [isAuth])

    function signUpClick() {
        const user = {
            username:usernameRef.current.value,
            password: passwordRef.current.value,
            mail: mailRef.current.value,
            phoneNumber: numberRef.current.value
        }
        dispatch(registration(user))
    }

    return (
        <div className="reg">
            <div className="header">Регистрация</div>
            <Input text="Введите username" className="input-right" width={"100%"} reference={usernameRef} margin={"10px"} type="text" placeholder=""/>
            <Input text="Введите пароль" className="input-left" width={"100%"} reference={passwordRef} margin={"10px"} type="password" placeholder=""/>
            <Input text="Введите почту" className="input-right" width={"100%"} reference={mailRef} margin={"10px"} type="text" placeholder=""/>
            <Input text="Введите номер телефона" className="input-left" width={"100%"} reference={numberRef} margin={"10px"} type="text" placeholder=""/>
            <div className='reg-btns'>
                <input type="checkbox"/>
                <Button text="Завершить" click={signUpClick}/>
            </div>
        </div>
    )
}

export default Registration;
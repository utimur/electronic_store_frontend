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
            <Input width={"100%"} reference={usernameRef} margin={"10px"} type="text" placeholder="Введите username..."/>
            <Input width={"100%"} reference={passwordRef} margin={"10px"} type="password" placeholder="Введите пароль..."/>
            <Input width={"100%"} reference={mailRef} margin={"10px"} type="text" placeholder="Введите вашу почту..."/>
            <Input width={"100%"} reference={numberRef} margin={"10px"} type="text" placeholder="Введите ваш номер телефона..."/>
            <div className='reg-btns'>
                <input type="checkbox"/>
                <Button text="Завершить" click={signUpClick}/>
            </div>
        </div>
    )
}

export default Registration;
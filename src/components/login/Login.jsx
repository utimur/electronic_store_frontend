import React, {useEffect, useRef, useState} from "react";
import './login.css';
import axios from 'axios';
import {API_URL} from "../../config";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/user";
import Button from "../../utils/button/Button";
import Input from "../../utils/input/Input";


const Login = (props) => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userReducer.isAuth)

    useEffect(()=>{
        if(isAuth) {
            props.history.push("/")
        }
    }, [isAuth])

    function loginClick() {
        dispatch(login(usernameRef, passwordRef))
        props.history.goBack()
    }


    return (
        <div className="login">
            <div className="header">Авторизация</div>
            <Input text="Ваше имя" className="input-left" width={"100%"} margin={"10px"} type="text" reference={usernameRef} placeholder=""/>
            <Input text="Ваш пароль" className="input-right" width={"100%"} margin={"10px"} type="password" reference={passwordRef} placeholder=""/>
            <div className="login-btns">
                <div onClick={()=>props.history.push("/recover")} className="forget">Забыли пароль?</div>
                <Button click={loginClick} text="Вход"/>
            </div>

        </div>
    )
}

export default Login;
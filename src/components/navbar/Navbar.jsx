import React, {useEffect} from "react";
import './navbar.css';
import {useDispatch, useSelector} from "react-redux";

const Navbar = (props) => {

    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()

    useEffect(()=>{}, [isAuth])

    function loginClick() {
        props.history.push("/login")
    }
    function logoutClick() {
        props.history.push("/login")
        dispatch({type:"LOGOUT"})
    }
    function signupClick() {
        props.history.push("/registration")
    }

    return (
        <div className="navbar">
            <div className="wrap">
                <div className="navbar-flex">
                    <div className="navbar-flex-logo"/>
                    <div className="navbar-flex-name" >Device store</div>
                    { isAuth == false ?
                        <div className={"navbar-flex-right"}>
                            <div className="navbar-flex-right-signin" onClick={()=>loginClick()}>Вход</div>
                            <div className="navbar-flex-right-signup" onClick={()=>signupClick()}>Регистрация</div>
                        </div>
                                :
                        <div className={"navbar-flex-right"}>
                            <div className="navbar-flex-right-logout" onClick={()=> logoutClick()}>Выход</div>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
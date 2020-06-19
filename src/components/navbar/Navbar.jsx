import React, {useEffect, useState} from "react";
import './navbar.css';
import {useDispatch, useSelector} from "react-redux";
import DropList from "../../utils/dropList/DropList";
import {wrapMapToPropsConstant} from "react-redux/lib/connect/wrapMapToProps";

const Navbar = (props) => {

    const isAuth = useSelector(state => state.userReducer.isAuth)
    const isAdmin = useSelector(state => state.userReducer.isAdmin)
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const dispatch = useDispatch()
    const [dropListVisible, setDropListVisible] = useState("none")

    useEffect(()=>{}, [isAuth, isAdmin])

    function loginClick() {
        props.history.push("/login")
    }
    function avatarClick() {
        if(dropListVisible=="none")
            setDropListVisible("flex")
        else
            setDropListVisible("none")
    }

    function logOutClick() {
        props.history.push("/login");
        dispatch({type:"LOGOUT"})
    }
    function signupClick() {
        props.history.push("/registration")
    }

    function adminClick() {
        props.history.push("/admin")
    }

    return (
        <div className="navbar">
            <div className="wrap">
                <div className="navbar-flex">
                    <div className="navbar-flex-logo"/>
                    <div className="navbar-flex-name" onClick={()=>props.history.push("/store")}>Device store</div>
                    { isAuth == false ?
                        <div className={"navbar-flex-right"}>
                            <div className="navbar-flex-right-busket" onClick={()=>props.history.push("/basket")}/>
                            <div className="navbar-flex-right-signin" onClick={()=>loginClick()}>Вход</div>
                            <div className="navbar-flex-right-signup" onClick={()=>signupClick()}>Регистрация</div>
                        </div>
                                :
                        <div className={"navbar-flex-right"}>
                            {isAdmin && <div className="navbar-flex-right-admin" onClick={()=> adminClick()}>Админ </div>}
                            <div className="navbar-flex-right-busket" onClick={()=>props.history.push("/basket")}/>
                            <div className="navbar-flex-right-logout"
                                 style={{backgroundImage: `url("data:image/jpg;base64,${currentUser.avatar}")`}}
                                 onClick={()=> avatarClick()}>
                                <div className="droplist" style={{display: dropListVisible}}>
                                    <div className="droplist-item" onClick={()=>props.history.push("/profile")}>Профиль</div>
                                    <div className="droplist-item" >Мои заказы</div>
                                    <div className="droplist-item" onClick={()=>logOutClick()}>Выход</div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;


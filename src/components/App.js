import React, {useEffect} from 'react';
import './app.css';
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Registration from "./registration/Registration";
import Leftbar from "./leftbar/Leftbar";
import AdminPanel from "./adminPanel/AdminPanel";
import Store from "./store/Store";
import Basket from "./basket/basket";
import Favour from "./favour/Favour";
import Device from "./Device/Device";
import Recover from "./recover/Recover";
import MailRecover from "./recover/MailRecover";
import PopUpMessage from "../utils/popUpMessage/popUpMessage";
import Order from "./order/Order";

export default function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const isAdmin = useSelector(state => state.userReducer.isAdmin)

    useEffect(()=>{
        const token = localStorage.getItem("token")
        console.log(token)
        if (token != "null") {
            dispatch(auth());
        }
    }, [])


    return (
        <BrowserRouter>
            <Route component={Navbar}/>
            <div className="wrap main-wrap">
                <Route exact path="/" component={()=><Redirect to="/store"/>}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/basket" component={Basket}/>
                {isAuth && <Route path="/favour" component={Favour}/>}
                <Route exact path="/store/" component={Store}/>
                <Route exact path="/recover/:token" component={Recover}/>
                <Route exact path="/recover" component={MailRecover}/>
                <Route exact path="/order" component={Order}/>
                <Route exact path="/device/:id" component={Device}/>
                <Route exact path="/store/:type" component={Store}/>
                <Route exact path="/store/:type/:brand" component={Store}/>
                {isAdmin && <Route path="/admin" component={AdminPanel}/>}
                <PopUpMessage text="Товар был успешно добавлен в корзину"/>
            </div>
        </BrowserRouter>
    );
}


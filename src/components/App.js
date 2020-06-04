import React, {useEffect} from 'react';
import './app.css';
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Registration from "./registration/Registration";
import LeftbarTypes from "./leftbar/LeftbarTypes";
import AdminPanel from "./adminPanel/AdminPanel";

export default function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const isAdmin = useSelector(state => state.userReducer.isAdmin)

    useEffect(()=>{
        dispatch(auth())
        console.log(localStorage.getItem("token"))
    }, [])


    return (
        <BrowserRouter>
            <Route component={Navbar}/>
            <div className="wrap main-wrap">
                {isAuth && <LeftbarTypes/>}
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/registration" component={Registration}/>
                {isAdmin && <Route path="/admin" component={AdminPanel}/>}
            </div>
        </BrowserRouter>
    );
}


import React, {useEffect} from 'react';
import './app.css';
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import {useDispatch} from "react-redux";
import {auth} from "../actions/user";
import Registration from "./registration/Registration";

export default function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(auth())
    }, [])


    return (
        <BrowserRouter>
            <Route component={Navbar}/>
            <div className="wrap">
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/registration" component={Registration}/>
            </div>
        </BrowserRouter>
    );
}


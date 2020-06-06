import React, {useEffect} from 'react';
import './app.css';
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
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
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/registration" component={Registration}/>
                {isAuth && <Route path="/basket" component={Basket}/>}
                {isAuth && <Route path="/favour" component={Favour}/>}
                <Route exact path="/store/" component={Store}/>
                <Route exact path="/store/:type" component={Store}/>
                <Route exact path="/store/:type/:brand" component={Store}/>
                {isAdmin && <Route path="/admin" component={AdminPanel}/>}
            </div>
        </BrowserRouter>
    );
}


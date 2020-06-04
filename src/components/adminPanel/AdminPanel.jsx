import React from "react";
import './adminPanel.css';
import AddZone from "./addZone/AddZone";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const AdminPanel = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)

    if(!isAuth){
        return <Redirect to='/login'/>
    }
    return (
        <div className="admin">

            <AddZone/>
        </div>
    )
}

export default AdminPanel;
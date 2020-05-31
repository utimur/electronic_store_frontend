import React from "react";
import {useSelector} from "react-redux";

const Profile = (props) => {

    const isAuth = useSelector(state => state.userReducer.isAuth)

    console.log(isAuth)
    if(isAuth == false){
        props.history.push("/login")
    }

    return (
        <div>
            PROFILE
        </div>
    )
}

export default Profile;
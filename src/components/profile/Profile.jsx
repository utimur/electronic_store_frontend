import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import "./profile.css";
import {setAvatar} from "../../actions/user";

const Profile = (props) => {

    const isAuth = useSelector(state => state.userReducer.isAuth)
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const dispatch = useDispatch()
    const avatarRef = useRef()

    console.log(isAuth)
    if(isAuth == false){
        props.history.push("/login")
    }

    function avatarChangeClick() {
        dispatch(setAvatar(currentUser.id, avatarRef.current.files[0]))
    }

    return (
        <div className="profile">
            <Input reference={avatarRef} placeholder="Выберите файл" type="file" width="50%"/>
            <Button text="Изменить" click={avatarChangeClick}/>
        </div>
    )
}

export default Profile;
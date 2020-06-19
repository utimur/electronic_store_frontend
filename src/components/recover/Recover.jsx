import React, {useRef} from "react";
import "./recover.css";
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import {recoverPassword} from "../../actions/user";
import {useDispatch} from "react-redux";

const Recover = (props) => {
    const passwordRef = useRef()
    const repeatPasRef = useRef()
    const dispatch = useDispatch()


    function recoverClick() {
        dispatch(recoverPassword(passwordRef.current.value, repeatPasRef.current.value, props.match.params.token, props.history));
    }

    return (
        <div className="recover">
            <div className="header">Восстановление пароля</div>
            <Input width={"100%"} margin={"10px"} type="password" reference={passwordRef} placeholder="Новый пароль..."/>
            <Input width={"100%"} margin={"10px"} type="password" reference={repeatPasRef} placeholder="Повторите пароль..."/>
            <Button click={recoverClick} text="Восстановить"/>
        </div>
    )
}

export default Recover
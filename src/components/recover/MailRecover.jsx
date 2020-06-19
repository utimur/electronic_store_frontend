import React, {useRef} from "react";
import "./recover.css";
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import {recoverPassword, sendMail} from "../../actions/user";
import {useDispatch} from "react-redux";

const MailRecover = (props) => {
    const mailRef = useRef()
    const repeatPasRef = useRef()
    const dispatch = useDispatch()


    async function sendMailClick() {
        await sendMail(mailRef.current.value);
        alert("На вашу почту было отправлено сообщение с инструкцией")
    }

    return (
        <div className="recover">
            <div className="header">Восстановление пароля</div>
            <Input width={"100%"} margin={"10px"} type="text" reference={mailRef} placeholder="Введите вашу почту..."/>
            <Button click={sendMailClick} text="Получить"/>
        </div>
    )
}

export default MailRecover
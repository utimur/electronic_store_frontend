import React from "react";
import './button.css'

const Button = (props) => {

    return (
            <button className="button" onClick={()=>props.click()}>{props.text}</button>
    )

}

export default Button;
import React from "react";
import './input.css'

const Input = (props) => {

    return (
        <div className="input" style={{width:props.width}}>
            <input id={props.id} ref={props.reference} type={props.type}  style={{margin:props.margin + " 0"}} placeholder={props.placeholder}/>
        </div>
    )

}

export default Input;
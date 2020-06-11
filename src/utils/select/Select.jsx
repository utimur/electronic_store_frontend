import React from "react";
import "./select.css";

const Select = (props) => {

    const ref = props.reference

    return (
            <select onSelect={props.onselect}  onChange={props.onchange} ref={ref}>
                {props.list.map(item =>
                    <option>{item.name}</option>
                )}
            </select>
    )
}

export default Select;
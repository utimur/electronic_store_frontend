import React from "react";
import './dropList.css';

const DropList = (props) => {
    return (
        <div className="droplist" style={props.style}>
            {props.list}
        </div>
    )
}

export default DropList;

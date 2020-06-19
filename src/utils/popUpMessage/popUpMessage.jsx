import React, {useEffect} from 'react';
import "./popUpMessage.css";
import {useDispatch, useSelector} from "react-redux";
import {setPopupVisible} from "../../reducers/popupReducer";

const PopUpMessage = (props) => {
    const isVisible = useSelector(state => state.popupReducer.isVisible)
    const text = useSelector(state => state.popupReducer.text)
    const dispatch = useDispatch()

    useEffect(()=> {
        setTimeout(()=> dispatch(setPopupVisible(false)), 5000)
    }, [text])

    return (
        <div style={isVisible ? {display:"block"} : {display:"none"}} className="popup">
            {text}
        </div>
    );
};

export default PopUpMessage;
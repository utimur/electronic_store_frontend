import React, {useEffect} from "react";
import "./device.css"
import Leftbar from "../leftbar/Leftbar";
import DeviceMain from "./deviceMain/DeviceMain";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentDevice} from "../../actions/device";
import DeviceDescription from "./deviceDescription/DeviceDescription";
import DeviceComments from "./deviceComments/DeviceComments";

const Device = (props) => {

    const deviceId = props.match.params.id
    const currentDevice = useSelector(state => state.deviceReducer.currentDevice)
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getCurrentDevice(deviceId, localStorage.getItem("id")))
    }, deviceId)


    return (
        <div className="device-main">
            <Leftbar/>
            <div className="device-wrap">
                <DeviceMain history={props.history}/>
                <DeviceDescription/>
                <DeviceComments history={props.history}/>
            </div>
        </div>
    )
}

export default Device
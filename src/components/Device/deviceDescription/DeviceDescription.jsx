import React from "react";
import "./deviceDescription.css";
import {useSelector} from "react-redux";

const DeviceDescription = () => {
    const currentDevice = useSelector(state => state.deviceReducer.currentDevice)

    return (
        <div className="device-info">
            {currentDevice.description != null && <div className="header">О товаре</div>}
            <div className="description">{currentDevice.description}</div>
            {currentDevice.properties.length != 0 && <div className="header">Характеристики</div>}
            <div className="properties">
                {currentDevice.properties.map(property =>
                    <div className="property"><span>{property.name}:</span> {property.description} </div>
                )}
            </div>
        </div>
    )
}

export default DeviceDescription;
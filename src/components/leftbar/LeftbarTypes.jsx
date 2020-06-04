import React, {useEffect, useState} from "react";
import "./leftbarTypes.css";
import {useDispatch, useSelector} from "react-redux";
import {setBrands, setDeviceTypes} from "../../actions/device";

const LeftbarTypes = (props) => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const deviceTypes = useSelector(state => state.deviceReducer.deviceTypes)
    const brands = useSelector(state => state.deviceReducer.brands)
    const dispatch = useDispatch()
    const [isBrandsVisible, setIsBrandsVisible] = useState("false")
    const [selectedType, setSelectedType] = useState()

    useEffect(()=>{
        dispatch(setDeviceTypes())
        dispatch(setBrands())
    }, [])

    function typeClick(type) {
        setIsBrandsVisible(true)
        setSelectedType(type.name)
    }

    return (
        <div className="leftbar">
            <div className="leftbar-types">
                {deviceTypes.map(type =>
                    <li onClick={()=>typeClick(type)}>{type.name}</li>
                )}
            </div>
            <div style={isBrandsVisible == true ? {display: "block"} : {display: "none"}} className="leftbar-brands">
                {brands.filter(brand => brand.deviceTypeName == selectedType).map(brand =>
                    <li>{brand.name}</li>
                )}
            </div>
        </div>
    );
}

export default LeftbarTypes;
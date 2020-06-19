import React, {useEffect, useState} from "react";
import "./leftbarTypes.css";
import {useDispatch, useSelector} from "react-redux";
import {setBrands, setBrandsVisible, setCurrentPage, getDeviceTypes, setSelectedType} from "../../actions/device";
import {NavLink} from "react-router-dom";

const Leftbar = (props) => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const deviceTypes = useSelector(state => state.deviceReducer.deviceTypes)
    const brands = useSelector(state => state.deviceReducer.brands)
    const dispatch = useDispatch()
    const isBrandsVisible = useSelector(state => state.deviceReducer.isBrandsVisible)
    const selectedType = useSelector(state => state.deviceReducer.selectedType)

    useEffect(()=>{
        dispatch(getDeviceTypes())
        dispatch(setBrands())
        dispatch(setCurrentPage(1))
    }, [])

    function typeClick(type) {
        dispatch(setBrandsVisible(true))
        dispatch(setSelectedType(type.name))
        dispatch(setCurrentPage(1))
    }

    return (
        <div className="leftbar">
            <div className="leftbar-types">
                {deviceTypes.map(type =>
                    <NavLink to={`/store/${type.id}`}>
                        <li onClick={()=>typeClick(type)}>{type.name}</li>
                    </NavLink>
                )}
            </div>
            <div style={isBrandsVisible == true ? {display: "block"} : {display: "none"}} className="leftbar-brands">
                {brands.filter(brand => brand.deviceTypeName == selectedType).map(brand =>
                    <NavLink to={`/store/${brand.typeId}/${brand.id}`}>
                        <li>{brand.name}</li>
                    </NavLink>
                )}
            </div>
        </div>
    );
}

export default Leftbar;
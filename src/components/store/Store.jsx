import React, {useEffect, useRef, useState} from "react";
import "./store.css";
import Device from "./device/Device";
import Leftbar from "../leftbar/Leftbar";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setDevices, setDevicesByBrand, setDevicesByType} from "../../actions/device";

const Store = (props) => {

    const typeId = props.match.params.type
    const brandId = props.match.params.brand
    const devices = useSelector(state => state.deviceReducer.devices);
    const currentPage = useSelector(state => state.deviceReducer.currentPage);
    const totalCount = useSelector(state => state.deviceReducer.totalCount);
    const countOnPage = useSelector(state => state.deviceReducer.countOnPage);
    const dispatch = useDispatch()
    const storeRef = useRef();
    const pageCount = Math.ceil(totalCount / countOnPage);
    let pages = [];
    for (let i = 1; i <= pageCount ; i++) {
        pages.push(i)
    }

    useEffect(()=> {
        // if (typeId != null) {
        //     if(brandId != null)
        //     {
        //         dispatch(setDevicesByBrand(typeId, brandId))
        //     } else {
        //         dispatch(setDevicesByType(typeId))
        //     }
        // } else {
        //     dispatch(setDevices());
        // }
        dispatch(setDevices(currentPage,typeId, brandId))
    }, [currentPage, typeId, brandId])




    return (
        <div ref={storeRef} className="store">
            <Leftbar/>
            <div className="store-flex">
                <div className="devices">
                    {devices.map(device =>
                        <Device device={device}/>
                    )}
                </div>
                <div className="pages">
                    {pages.map(page =>
                        <div className={page == currentPage ? "current-page" : "page"}
                             onClick={()=>dispatch(setCurrentPage(page))}>{page}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Store;

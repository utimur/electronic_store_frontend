import React, {useEffect, useRef, useState} from "react";
import "./store.css";
import Device from "./device/Device";
import Leftbar from "../leftbar/Leftbar";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setDevices, setDevicesByBrand, setDevicesByType} from "../../actions/device";
import {createPages} from "../../config";

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

    createPages(pages, pageCount, currentPage)


    useEffect(()=> {
        dispatch(setDevices(currentPage,typeId, brandId, countOnPage))
    }, [currentPage, typeId, brandId])




    return (
        <div ref={storeRef} className="store">
            <Leftbar/>
            <div className="store-flex">
                <div className="devices">
                    {devices.map(device =>
                        <Device basket={false} history={props.history} device={device}/>
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

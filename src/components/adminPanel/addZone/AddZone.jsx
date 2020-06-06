import React, {useEffect, useRef, useState} from "react";
import "./addZone.css";
import Select from "../../../utils/select/Select";
import Button from "../../../utils/button/Button";
import Input from "../../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {
    addBrand,
    addDevice,
    addDeviceType, deleteBrand,
    deleteDeviceType,
    setBrands,
    setDevices,
    setDeviceTypes
} from "../../../actions/device";

const AddZone = (props) => {


    const deviceSelectRef = useRef()
    const deviceTypeSelectRef = useRef()
    const newDeviceTypeSelectRef = useRef()
    const newDeviceBrandSelectRef = useRef()

    const deviceTypeInputRef = useRef()
    const newDeviceInputRef = useRef()
    const brandInputRef = useRef()
    const priceInputRef = useRef()
    const fileInputRef = useRef()

    const dispatch = useDispatch()

    const deviceTypes = useSelector(state => state.deviceReducer.deviceTypes)
    const brands = useSelector(state => state.deviceReducer.brands)
    const [newDeviceBrands, setNewDeviceBrands] = useState([])

    useEffect(()=> {
        dispatch(setDeviceTypes())
        dispatch(setBrands())
        // dispatch(setDevices())
    },[])

    function addBrandClick() {
        dispatch(addBrand(brandInputRef.current.value,
            deviceTypeSelectRef.current.options[deviceTypeSelectRef.current.selectedIndex].innerText))
    }

    function addDeviceClick() {
        const device = {
            name: newDeviceInputRef.current.value,
            price: priceInputRef.current.value,
            brandName: newDeviceBrandSelectRef.current.options[newDeviceBrandSelectRef.current.selectedIndex].innerText,
            typeName: newDeviceTypeSelectRef.current.options[newDeviceTypeSelectRef.current.selectedIndex].innerText,
            file: fileInputRef.current.files[0] }
        dispatch(addDevice(device))
    }

    function changeNewDeviceBrand() {
        setNewDeviceBrands(brands.filter(brand => brand.deviceTypeName == newDeviceTypeSelectRef.current.options[newDeviceTypeSelectRef.current.selectedIndex].innerText))
    }

    function deleteBrandClick() {
        dispatch(deleteBrand(brandInputRef.current.value,
            deviceTypeSelectRef.current.options[deviceTypeSelectRef.current.selectedIndex].innerText))
    }
    return (
        <div className="addzone">
            <div className="addzone-header">Новый вид устройства</div>
            <div className="addzone-type">
                <Input reference={deviceTypeInputRef} placeholder="Введите новый вид устройства..." width="100%" margin="10px"/>
                <div>
                    <Button click={()=>dispatch(deleteDeviceType(deviceTypeInputRef.current.value))} text="Удалить"/>
                    <Button click={()=>dispatch(addDeviceType(deviceTypeInputRef.current.value))} text="Добавить"/>
                </div>
            </div>


            <div className="addzone-header">Новый Брэнд</div>
            <div className="addzone-brand">
                <Select reference={deviceTypeSelectRef} list={deviceTypes}/>
                <Input id="input" reference={brandInputRef} placeholder="Введите новый брэнд..." width="100%" margin="10px"/>
                <div>
                    <Button click={deleteBrandClick}  text="Удалить"/>
                    <Button click={addBrandClick}  text="Добавить"/>
                </div>
            </div>

            <div className="addzone-header">Новое устройство</div>
            <div className="addzone-device">
                <Select onchange={changeNewDeviceBrand} reference={newDeviceTypeSelectRef} list={deviceTypes}/>
                <Select reference={newDeviceBrandSelectRef}
                        list={newDeviceBrands}/>
                <Input reference={newDeviceInputRef} placeholder="Введите название устройства..." width="100%" margin="10px"/>
                <div className="addzone-device-inputs">
                    <Input reference={priceInputRef} placeholder="Введите цену..." width="49%" margin="10px"/>
                    <Input reference={fileInputRef} placeholder="Выберите файл" type="file" width="49%" margin="10px"/>
                </div>
                <div>
                    <Button click={addDeviceClick} text="Удалить"/>
                    <Button click={addDeviceClick} text="Добавить"/>
                </div>
            </div>

            <div className="addzone-header">Новое cвойство</div>
            <div className="addzone-properties">
                <Select reference={deviceSelectRef} list={[{name:"123"}, {name:"456"}]}/>
                <div className="addzone-device-inputs">
                    <Input placeholder="Свойство..." width="49%" margin="10px"/>
                    <Input placeholder="Описание..." width="49%" margin="10px"/>
                </div>
                <Button  text="Добавить"/>
            </div>
        </div>
    )
}

export default AddZone;
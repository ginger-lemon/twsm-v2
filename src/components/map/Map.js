import React, { useState } from "react";
import './Map.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'
import MapIcon from '../../images/icon-mark.svg'
import LoadingIcon from '../../images/icon-loading.svg'

import { useDispatch, useSelector } from "react-redux";

// TODO: re-render 

const Map = () => {
    // get map ref
    const [map, setMap] = useState(null)
    const [showFailedDialog, setShowFailedDialog] = useState(true)

    const inputValue = useSelector(state => state.search.inputValue)
    const mapData = useSelector(state => state.fetch.spiceData)
    const mapStatus = useSelector(state => state.fetch.spiceStatus)

    const customIcon = L.icon({
        iconUrl: MapIcon,
        iconSize: [35, 35]
    });

    const popups = 
        mapStatus === 'successed' && mapData.results.map((data, id) => (
            <Marker
                key={id}
                icon={customIcon}
                position={[data.lat, data.lon]}
            >
                <Popup>這裡曾發現：{inputValue}</Popup>
            </Marker>
        ))

    const loadingDialig = (
        <div className="loading-wrapper">
            <div>
                <img 
                    className="loading-img"
                    src={LoadingIcon}
                    alt=""
                />
                <p>Loading...</p>
            </div>
        </div>
    )

    // close failedDialog
    const handleShowFailedDialog = () => {
        setShowFailedDialog(false)
        console.log('click')
    }

    const failedDialog = (
        <div 
            className="failed-wrapper"
            onClick={handleShowFailedDialog}
        >
            <h4>歹勢！！還沒有更新位置紀錄</h4>
            <p>點我關閉</p>
        </div>
    )

    // 根據狀態改變的提示視窗
    let renderedDialog;

    switch (mapStatus) {
        case 'loading': 
            renderedDialog = loadingDialig
            break;
        
        case 'failed':
            renderedDialog = showFailedDialog && failedDialog
            break;

        case 'successed':
            renderedDialog = null
            break;

        default:
            renderedDialog = null
    }

    return(
        <div className="map-container">
            <MapContainer
                ref={setMap}
                center={[23.697809, 120.480518]}
                zoom={8}
                scrollWheelZoom={true}
            >
                {mapData && popups}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            {renderedDialog}
        </div>
    );
}

export default Map;

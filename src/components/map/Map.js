import React, { useEffect, useRef } from "react";
import './Map.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'
import MapIcon from '../../images/icon-mark.svg'
import { useDispatch, useSelector } from "react-redux";

const Map = () => {
    const mapRef = useRef(null)
    const inputValue = useSelector(state => state.search.inputValue)
    const mapData = useSelector(state => state.fetch.mapData)
    const mapStatus = useSelector(state => state.fetch.mapStatus)

    const customIcon = L.icon({
        iconUrl: MapIcon,
        iconSize: [35, 35]
    });

    // 地圖中心向右平移
    const targetCoordinates = [23.697809, 120.960518]

    if (mapRef.current) {
        const map = mapRef.current.leafletElemrnt
    }
    
    // useEffect(() => {
    //     if (mapRef.current) {
            // leafletElement : react-leaflet 指向 leaflet address 的 reference
    //         const map = mapRef.current.leafletElement
    //         console.log(map)
    //         map.panTo(targetCoordinates, { animate: false })
    //         map.panBy([400, 0], { animate: false })
    //     } else {
    //         console.log("no mapRef.current")
    //     }
    // }, [])

    const popups = 
        mapStatus === 'successed' && mapData.map((data, index) => (
            <Marker
                key={index}
                icon={customIcon}
                position={[data.lat, data.lon]}
            >
                <Popup>這裡曾觀測到：{inputValue}</Popup>
            </Marker>
        ))

    return(
        <div>
            <MapContainer
                ref={mapRef}
                center={targetCoordinates}
                zoom={8}
                scrollWheelZoom={true}
            >
                {mapData && popups}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

export default Map;

// https://github.com/PaulLeCam/react-leaflet/issues/841
// react-leaflet v4 移除 whenCreated ，暫時無其他方式取得 ref.current 
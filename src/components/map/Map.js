import React, { useEffect, useRef, useState } from "react";
import './Map.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from 'leaflet'
import MapIcon from '../../images/icon-mark.svg'
import { useDispatch, useSelector } from "react-redux";

const Map = () => {
    const [map, setMap] = useState()
    const inputValue = useSelector(state => state.search.inputValue)
    const mapData = useSelector(state => state.fetch.mapData)
    const mapStatus = useSelector(state => state.fetch.mapStatus)

    const customIcon = L.icon({
        iconUrl: MapIcon,
        iconSize: [35, 35]
    });

    const popups = 
        mapStatus === 'successed' && mapData.map((data, id) => (
            <Marker
                key={id}
                icon={customIcon}
                position={[data.lat, data.lon]}
            >
                <Popup>這裡曾觀測到：{inputValue}</Popup>
            </Marker>
        ))

    return(
        <div>
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
        </div>
    );
}

export default Map;

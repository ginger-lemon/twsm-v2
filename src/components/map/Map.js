import React, { useEffect } from "react";
import './Map.css'
import { MapContainer, TileLayer } from "react-leaflet";
import L from 'leaflet'
import MapIcon from '../../images/icon-mark.svg'
import { useSelector } from "react-redux";


const customIcon = L.icon({
    iconUrl: {MapIcon},
    iconSize: [35, 35]
});

const Map = () => {

    return(
        <div>
            <MapContainer
                center={[23.697809, 120.960518]}
                zoom={8}
                scrollWheelZoom={false}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

export default Map;
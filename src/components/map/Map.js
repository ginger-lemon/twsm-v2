import React, { useEffect } from "react";
import './Map.css'
import { MapContainer, TileLayer } from "react-leaflet";
import L, { map } from 'leaflet'
import MapIcon from '../../images/icon-mark.svg'
import { useSelector, useDispatch } from "react-redux";
import { getMapData } from "../../redux/fetch/fetchSlice";

const customIcon = L.icon({
    iconUrl: {MapIcon},
    iconSize: [35, 35]
});

const Map = () => {
    const mapData = useSelector(state => state.fetch.data)
    const fetchStatus = useSelector(state => state.fetch.loading)
    
    useEffect(() => {
        if (mapData) {
            console.log(mapData)
        }
    }, [fetchStatus])

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
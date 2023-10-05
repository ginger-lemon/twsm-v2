import React from "react";
import Styles from './Utilization.module.css'
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import InfoCard from "../../components/InfoCard/InfoCard";
import SubLayout from "../../layout/SubLayout/SubLayout";
import { useSelector } from "react-redux";


function Utilization() {
    const data = useSelector(state => state.fetch.textData)
    const result = data && data.filter( data => data.Kingdom === '植物界' )
    const usableData = result && result[0]
    console.log(usableData)

    return (
        <SubLayout>
            <div className={Styles.section}>
                <CategroiesBar 
                    activeP='utilization'
                />
                <InfoCard>
                    <h3>標題</h3>
                    <p>應用～準備中～</p>
                </InfoCard>
            </div>
        </SubLayout>
    );
} 

export default Utilization;

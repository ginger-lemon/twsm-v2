import React from "react";
import Styles from './Features.module.css'
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import InfoCard from "../../components/InfoCard/InfoCard";
import SubLayout from "../../layout/SubLayout/SubLayout";
import { useSelector } from "react-redux";

function Features() {
    const data = useSelector(state => state.fetch.textData)
    const result = data && data.filter( data => data.Kingdom === '植物界' )
    const usableData = result && result[0]
    console.log(usableData)

    return (
        <SubLayout>
            <div className={Styles.section}>
                <CategroiesBar 
                    activeP='features'
                />
                <InfoCard>
                    <p>{usableData && usableData.Characters}</p>
                </InfoCard>
    </div>
        </SubLayout>
    );
} 

export default Features;

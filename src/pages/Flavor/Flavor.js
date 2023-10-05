import React from "react";
import Styles from './Flavor.module.css'
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import InfoCard from "../../components/InfoCard/InfoCard";
import SubLayout from "../../layout/SubLayout/SubLayout";
import { useSelector } from "react-redux";

const Flavor = () => {
    
    return (
        <SubLayout>
            <div className={Styles.section}>
                <CategroiesBar 
                    activeP='flavor'
                />
                <InfoCard>
                    <p>氣味</p>
                </InfoCard>
            </div>
        </SubLayout>
    );
} 

export default Flavor;

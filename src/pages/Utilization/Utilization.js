import React from "react";
import Styles from './Utilization.module.css'
import MainLayout from "../../layout/MainLayout/MainLayout";
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import Panel from '../../components/Panel/Panel'
import SearchInput from "../../components/SearchInput/SearchInput";
import InfoCard from "../../components/InfoCard/InfoCard";
import SubLayout from "../../layout/SubLayout/SubLayout";


function Utilization() {
    return (
        <SubLayout>
            <div className={Styles.section}>
                <CategroiesBar 
                    activeP='utilization'
                />
                <InfoCard>
                    <h3>標題</h3>
                    <p>介紹</p>
                </InfoCard>
            </div>
        </SubLayout>
    );
} 

export default Utilization;

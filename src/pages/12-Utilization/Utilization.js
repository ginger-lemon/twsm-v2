import React from "react";
import Styles from './Utilization.module.css'
import MainLayout from "../../layout/MainLayout";
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import Panel from '../../components/Panel/Panel'
import SearchInput from "../../components/SearchInput/SearchInput";
import InfoCard from "../../components/InfoCard/InfoCard";


function Utilization() {
    return (
        <MainLayout>
            <Panel>
                <div className={Styles.input}>
                    <SearchInput />
                </div>
                <div className={Styles.section}>
                    <CategroiesBar />
                    <InfoCard>
                        <h3>標題</h3>
                        <p>介紹</p>
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
} 

export default Utilization;
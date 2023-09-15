import React from "react";
import Styles from './Features.module.css'
import MainLayout from "../../layout/MainLayout";
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import Panel from '../../components/Panel/Panel'
import SearchInput from "../../components/SearchInput/SearchInput";
import InfoCard from "../../components/InfoCard/InfoCard";


function Features() {
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

export default Features;
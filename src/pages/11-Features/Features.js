import React from "react";
import Styles from './Features.module.css'
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import InfoCard from "../../components/InfoCard/InfoCard";
import SubLayout from "../../layout/SubLayout/SubLayout";

function Features() {
    return (
        <SubLayout>
            <div className={Styles.section}>
                <CategroiesBar />
                <InfoCard>
                    <h3>標題</h3>
                    <p>介紹</p>
                </InfoCard>
    </div>
        </SubLayout>
    );
} 

export default Features;

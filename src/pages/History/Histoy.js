import React from "react";
import Styles from './History.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import InfoCard from "../../components/InfoCard/InfoCard";

const History = () => {
    return (
        <MainLayout>
            <Panel>
                <div className={Styles.wrapper}>
                    <InfoCard>
                        顯示搜尋紀錄
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
}

export default History;

import React from "react";
import Styles from './History.module.css'
import MainLayout from "../../layout/MainLayout";
import Panel from '../../components/Panel/Panel'
import InfoCard from '../../components/InfoCard/InfoCard'
import SearchInput from "../../components/SearchInput/SearchInput";

function History() {
    return (
        <MainLayout>
            <Panel>
                <div className={Styles.input}>
                    <SearchInput />
                </div>
                <div className={Styles.section}>
                    <InfoCard>
                        顯示搜尋紀錄
                    </InfoCard>
                    <InfoCard>
                        顯示搜尋紀錄2
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
}

export default History;
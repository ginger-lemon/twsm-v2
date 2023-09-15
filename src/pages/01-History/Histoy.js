import React from "react";
import Styles from './History.module.css'
import MainLayout from "../../layout/MainLayout";
import InfoSection from '../../components/InfoSection/InfoSection'
import InfoCard from '../../components/InfoCard/InfoCard'
import SearchInput from "../../components/SearchInput/SearchInput";

function History() {
    return (
        <MainLayout>
            <InfoSection>
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
            </InfoSection>
        </MainLayout>
    );
}

export default History;
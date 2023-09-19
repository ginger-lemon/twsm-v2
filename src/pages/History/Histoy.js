import React from "react";
import Styles from './History.module.css'
import InfoCard from '../../components/InfoCard/InfoCard'
import SubLayout from "../../layout/SubLayout/SubLayout";

function History() {
    return (
        <SubLayout>
            <div className={Styles.section}>
                    <InfoCard>
                        顯示搜尋紀錄
                    </InfoCard>
                    <InfoCard>
                        顯示搜尋紀錄2
                    </InfoCard>
                </div>
        </SubLayout>
    );
}

export default History;


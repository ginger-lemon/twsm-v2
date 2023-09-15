import React from "react";
import Styles from './Bookmark.module.css'
import MainLayout from "../../layout/MainLayout";
import Panel from '../../components/Panel/Panel'
import InfoCard from "../../components/InfoCard/InfoCard";
import SearchInput from "../../components/SearchInput/SearchInput";

function Bookmark() {
    return (
        <MainLayout>
            <Panel>
                <div className={Styles.input}>
                    <SearchInput />
                </div>
                <div className={Styles.section}>
                    <InfoCard>
                        顯示我的最愛
                    </InfoCard>
                    <InfoCard>
                        顯示我的最愛2
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
}

export default Bookmark;
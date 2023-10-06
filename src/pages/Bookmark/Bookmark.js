import React from "react";
import Styles from './Bookmark.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import InfoCard from "../../components/InfoCard/InfoCard";

const Bookmark = () => {
    return (
        <MainLayout>
            <Panel>
                <div className={Styles.wrapper}>
                    <InfoCard>
                        顯示我的最愛
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
}

export default Bookmark;

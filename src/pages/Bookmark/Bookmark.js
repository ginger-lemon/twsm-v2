import React from "react";
import Styles from './Bookmark.module.css'
import InfoCard from "../../components/InfoCard/InfoCard";
import SubLayout from "../../layout/SubLayout/SubLayout";

function Bookmark() {
    return (
        <SubLayout>
            <div className={Styles.section}>
                <InfoCard>
                    顯示我的最愛
                </InfoCard>
                <InfoCard>
                    顯示我的最愛2
                </InfoCard>
            </div>
        </SubLayout>
    );
}

export default Bookmark;


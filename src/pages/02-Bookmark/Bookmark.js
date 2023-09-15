import React from "react";
import Styles from './Bookmark.module.css'
import MainLayout from "../../layout/MainLayout";
import InfoSection from '../../components/InfoSection/InfoSection'
import InfoCard from "../../components/InfoCard/InfoCard";
import SearchInput from "../../components/SearchInput/SearchInput";

function Bookmark() {
    return (
        <MainLayout>
            <InfoSection>
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
            </InfoSection>
        </MainLayout>
    );
}

export default Bookmark;
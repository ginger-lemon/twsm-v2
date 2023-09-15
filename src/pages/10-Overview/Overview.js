import React from "react";
import Styles from './Overview.module.css'
import InfoCard from "../../components/InfoCard/InfoCard";
import Tag from './Tag'
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import SubLayout from "../../layout/SubLayout/SubLayout";


function Overview() {
    return (
        <SubLayout>
            <div className={Styles.img}>
                <img 
                    src='https://c2.staticflickr.com/2/1897/42413024160_93da2dd7dc_b.jpg'
                    alt=""
                />
                <button>顯示更多圖片</button>
            </div>
            <InfoCard>
                <div className={Styles.basicInfo}>
                    <div>
                        <h1 className={Styles.h1}>香料名稱</h1>
                        <div className={Styles.tags}>
                            <Tag />
                        </div>
                    </div>
                    <p className={Styles.scientifiName}>Spice Name</p>
                        <p>科＞屬</p>
                </div>
            </InfoCard>
            {/* 總覽/評論/簡介區塊 */}
            <CategroiesBar />
            {/* 其他人也搜尋以下項目 */}
            <InfoCard >
                <div className={Styles.overview}>
                    <h3>標題</h3>
                    <p>其他內容</p>
                </div>
            </InfoCard>
        </SubLayout>
    );
}

export default Overview;


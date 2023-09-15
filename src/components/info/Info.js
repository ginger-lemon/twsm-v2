import React from "react";
import Styles from './Info.module.css'
import SpicesTag from "./SpicesTag";
import InfoCard from "../InfoCard/InfoCard";
import CategroiesBar from "../CategroyBar/CategroyBar";

function Info() {
    return (
        <div className={Styles.container}>
            {/* 圖片 */}
            <div className={Styles.imgContainer}>
                <img 
                    className={Styles.img}
                    src='https://c2.staticflickr.com/2/1897/42413024160_93da2dd7dc_b.jpg' 
                    alt=""
                />
                <button>顯示更多照片</button>
            </div>
            {/* 基本資訊欄位 */}
            <InfoCard  >
                <div className={Styles.basicInfo}>
                    <div>
                        <h1 className={Styles.h1}>香料名稱</h1>
                        <div className={Styles.tags}>
                            <SpicesTag />
                        </div>
                    </div>
                    <p className={Styles.scientifiName}>Spice Name</p>
                    <p>科＞屬</p>
                </div>
            </InfoCard>
            {/* 對應 google map 總覽/評論/簡介區塊 */}
            <CategroiesBar />
            {/* 對應 google map 其他人也搜尋以下項目 */}
            <InfoCard >
                <div className={Styles.overview}>
                    <h3>標題</h3>
                    <p>其他內容</p>
                </div>
            </InfoCard>

        </div>
    );
}

export default Info;
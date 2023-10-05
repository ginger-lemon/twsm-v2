import React, { useEffect } from "react";
import Styles from './Results.module.css'
import InfoCard from "../../components/InfoCard/InfoCard";
import Tag from './Tag'
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import SubLayout from "../../layout/SubLayout/SubLayout";
import { useDispatch, useSelector } from "react-redux";

const Results = () => {
    const textStatus = useSelector(state => state.fetch.textStatus)
    const textData = useSelector(state => state.fetch.textData)
    console.log(textData)

    // loading 時顯示 fake layout
    // failed 時顯示錯誤訊息並跳轉回 Home
    // successed 且有 data 時正常顯示   
    // 處理地圖重複 render 問題

    return (
        <SubLayout>
            <div className={Styles.img}>
                {/* 圖片部分之後連 mockup */}
                <img 
                    src='https://c2.staticflickr.com/2/1897/42413024160_93da2dd7dc_b.jpg'
                    alt=""
                />
                <button>顯示更多圖片</button>
            </div>
            <InfoCard>
                {/* 處理 textStatus === loading 的讀取版本 */}
                <div className={Styles.basicInfo}>
                    <div>
                        <h1 className={Styles.h1}>
                            {textData && textData.ChineseName}
                        </h1>
                    </div>
                    <p className={Styles.scientifiName}>
                        {textData && textData.SciName}
                    </p>
                        <p>
                            {textData && textData.Class} ＞ {textData && textData.Order} ＞ {textData && textData.Family}
                        </p>
                </div>
            </InfoCard>
            {/* CategroiesBar 和 底下的內容直接統整成一個元件，並且按下不同分類時會顯示對應結果  */}
            {/* 總覽/評論/簡介區塊 */}
            <CategroiesBar 
                activeP='behavior'
            />
            {/* 其他人也搜尋以下項目 */}
            <InfoCard >
                <div className={Styles.overview}>
                    <h4>習性</h4>
                    <p>{textData && textData.Behavior}</p>
                    <h4>特徵</h4>
                    <p>{textData && textData.Characters}</p>
                </div>
            </InfoCard>
        </SubLayout>
    );
}

export default Results;


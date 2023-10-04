import React, { useEffect } from "react";
import Styles from './Results.module.css'
import InfoCard from "../../components/InfoCard/InfoCard";
import Tag from './Tag'
import CategroiesBar from "../../components/CategroyBar/CategroyBar";
import SubLayout from "../../layout/SubLayout/SubLayout";
import { useDispatch, useSelector } from "react-redux";

const Results = () => {
    const data = useSelector(state => state.fetch.textData)
    const result = data && data.filter( data => data.Kingdom === '植物界' )
    const usableData = result && result[0]
    console.log(usableData)

    // TODO: textStatus === loading 的讀取版本
    // TODO: textStatus === successed 放大鏡變 x ，按下會回到 Home
    // TODO: 當 textStatus === successed 時重新整理頁面不會清空 inputValue 與 result 的值

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
                            {usableData && usableData.ChineseName}
                        </h1>
                        <div className={Styles.tags}>
                            <Tag />
                        </div>
                    </div>
                    <p className={Styles.scientifiName}>
                        {usableData && usableData.SciName}
                    </p>
                        <p>
                            {usableData && usableData.Class} ＞ {usableData && usableData.Order} ＞ {usableData && usableData.Family}
                        </p>
                </div>
            </InfoCard>
            {/* CategroiesBar 和 底下的內容直接統整成一個元件，並且按下不同分類時會顯示對應結果  */}
            {/* 總覽/評論/簡介區塊 */}
            <CategroiesBar 
                activeP='overview'
            />
            {/* 其他人也搜尋以下項目 */}
            <InfoCard >
                <div className={Styles.overview}>
                    <p>{usableData && usableData.Behavior}</p>
                </div>
            </InfoCard>
        </SubLayout>
    );
}

export default Results;


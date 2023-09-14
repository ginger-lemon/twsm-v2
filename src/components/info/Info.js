import React from "react";
import Styles from './Info.module.css'
import SpicesTag from "./SpicesTag";

function Info() {
    return (
        <div className={Styles.container}>
            <div className={Styles.imgContainer}>
                <img 
                    className={Styles.img}
                    src='https://c2.staticflickr.com/2/1897/42413024160_93da2dd7dc_b.jpg' 
                    alt=""
                />
                <button>顯示更多照片</button>
            </div>
            {/* 基本資訊欄位 */}
            <div className={`${Styles.card} ${Styles.basicInfo}`}>
                <div>
                    <h1 className={Styles.h1}>香料標題</h1> 
                    <div className={Styles.tagBlock}>
                        <SpicesTag />
                    </div>
                </div>
                <p className={Styles.scientifiName}>香料學名</p>
                <p>科＞屬</p>
            </div>
            <div className={Styles.card}>
                <p>大家怎麼稱呼？</p>
                <p>各種香料的別稱</p>
            </div>
            {/* 對應 google map 總覽/評論/簡介區塊 */}
            <div className={`${Styles.card} ${Styles.moreInfo}`}> 
                <div>特徵</div>
                <div>屬性</div>
                <div>應用</div>
            </div>
            {/* 對應 google map 其他人也搜尋以下項目 */}
            <div className={Styles.card}>
                <h3>其他台灣常見的香料</h3>
            </div>
        </div>
    );
}

export default Info;
import React, { Children } from "react";
import Styles from './Panel.module.css'
import CloseButton from "./CloseButton";

function Panel({children}) {
    // 處理按下 Close 元件會把 panel 收起來（display: none + 淡出動畫效果？）
    // 把 CloseButton 統整進來
    return (
        <div className={Styles.section}>
            <div>
                {children}
            </div>
            <CloseButton />
        </div>
    );
}

export default Panel;
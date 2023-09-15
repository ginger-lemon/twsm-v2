import React from "react";
import Styles from './CategroyBar.module.css'
import InfoCard from "../InfoCard/InfoCard";

function CategroiesBar() {
    return(
        <InfoCard>
            <div className={Styles.categroy}>
                <div className={Styles.categroyName}>
                    <p>概述</p>
                </div>
                <div className={Styles.categroyName}>
                    <p>特徵</p>
                </div>
                <div className={Styles.categroyName}>
                    <p>應用</p>
                </div>
            </div>
        </InfoCard>
    );
}

export default CategroiesBar;
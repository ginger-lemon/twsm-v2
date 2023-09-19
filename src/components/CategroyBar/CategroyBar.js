import React from "react";
import Styles from './CategroyBar.module.css'
import InfoCard from "../InfoCard/InfoCard";
import { Link } from "react-router-dom";
import Overview from "../../pages/Overview/Overview";
import Features from "../../pages/Features/Features";
import Utilization from "../../pages/Utilization/Utilization";

function CategroiesBar({ activeP }) {
    return(
        <InfoCard>
            <div className={Styles.categroy}>
                {/* TODO: 加入 template 處理 :spiceName */}
                <Link to='/overview' element={<Overview />}>
                    <div className={Styles.categroyName}>
                        <p 
                            className={activeP === 'overview' ? Styles.activeP : ''}
                        >
                            概述
                        </p>
                    </div>
                </Link>
                {/* TODO: 加入 template 處理 :spiceName */}
                <Link to='/features' element={<Features />}>
                    <div className={Styles.categroyName}>
                        <p
                            className={activeP === 'features' ? Styles.activeP : ''}
                        >
                            特徵
                        </p>
                    </div>
                </Link>
                {/* TODO: 加入 template 處理 :spiceName */}
                <Link to='/utilization' element={<Utilization />}>
                    <div className={Styles.categroyName}>
                        <p
                            className={activeP === 'utilization' ? Styles.activeP : ''}
                        >
                            應用
                        </p>
                    </div>
                </Link>
            </div>
        </InfoCard>
    );
}

export default CategroiesBar;
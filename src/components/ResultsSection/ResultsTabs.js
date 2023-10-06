import React from "react";
import Styles from './ResultsTabs.module.css'
import InfoCard from "../InfoCard/InfoCard";
import { Link, Outlet } from "react-router-dom";

import Results from "../../pages/Results/Results";
import Utilization from "../../pages/Utilization/Utilization";
import Flavor from "../../pages/Flavor/Flavor";


const ResultsTabs = ({ activeTab, children }) => {

    return(
        <InfoCard>
            {/* tab block */}
            <div className={Styles.tabBar}>  
                <button 
                    className={
                        activeTab === 'results' ? Styles.activeTab : Styles.tab
                    }
                >
                    <Link to='/results' element={<Results />}>概述</Link>
                </button>
                <button 
                    className={
                        activeTab === 'flavor' ? Styles.activeTab : Styles.tab
                    }
                >
                    <Link to='/flavor' element={<Flavor />}>風味</Link>
                </button>
                <button 
                    className={
                        activeTab === 'utilization' ? Styles.activeTab : Styles.tab
                    }
                >
                    <Link to='/Utilization' element={<Utilization />}>應用</Link>
                 </button>
            </div>
            {/* content block */}
            <div className={Styles.moreInfo}> 
                { children }
            </div>
        </InfoCard>
    );
}

export default ResultsTabs;


{/* <InfoCard>
<div className={Styles.tabBar}>
    <Link to='/results' element={<Results />}>
        <div className={Styles.categroyName}>
            <p 
                className={activeP === 'behavior' ? Styles.activeP : ''}
            >
                概述
            </p>
        </div>
    </Link>
    <Link to='/flavor' element={<Flavor />}>
        <div className={Styles.categroyName}>
            <p
                className={activeP === 'flavor' ? Styles.activeP : ''}
            >
                氣味
            </p>
        </div>
    </Link>
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
</InfoCard> */}
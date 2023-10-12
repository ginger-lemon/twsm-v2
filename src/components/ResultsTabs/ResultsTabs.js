import React from "react";
import Styles from './ResultsTabs.module.css'
import InfoCard from "../InfoCard/InfoCard";
import { Link, Outlet } from "react-router-dom";

import Results from "../../pages/Results/Results";
import Utilization from "../../pages/Utilization/Utilization";
import Flavor from "../../pages/Flavor/Flavor";
import { useSelector } from "react-redux";


const ResultsTabs = ({ activeTab, children }) => {
    const inputValue = useSelector(state => state.search.inputValue)
    const encodeValue = encodeURIComponent(inputValue)

    return(
        <InfoCard>
            {/* tab block */}
            <div className={Styles.tabBar}>  
                <button 
                    className={
                        activeTab === 'results' ? Styles.activeTab : Styles.tab
                    }
                >
                    <Link to={`/results/${encodeValue}`} element={<Results />}>概述</Link>
                </button>
                <button 
                    className={
                        activeTab === 'flavor' ? Styles.activeTab : Styles.tab
                    }
                >
                    <Link to={`/flavor/${encodeValue}`} element={<Flavor />}>風味</Link>
                </button>
                <button 
                    className={
                        activeTab === 'utilization' ? Styles.activeTab : Styles.tab
                    }
                >
                    <Link to={`/utilization/${encodeValue}`} element={<Utilization />}>應用</Link>
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
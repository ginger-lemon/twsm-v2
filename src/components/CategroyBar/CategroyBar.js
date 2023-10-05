import React from "react";
import Styles from './CategroyBar.module.css'
import InfoCard from "../InfoCard/InfoCard";
import { Link } from "react-router-dom";

import Results from "../../pages/Results/Results";
import Utilization from "../../pages/Utilization/Utilization";
import Flavor from "../../pages/Flavor/Flavor";


const CategroiesBar = ({ activeP }) => {
    return(
        <InfoCard>
            <div className={Styles.categroy}>
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
        </InfoCard>
    );
}

export default CategroiesBar;
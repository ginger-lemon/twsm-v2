import React from "react";
import Styles from './InfoCard.module.css'

const InfoCard = ({ children }) => {
    return (
        <div className={Styles.infoCard}>  
            {children}
        </div>
    );
}

export default InfoCard;
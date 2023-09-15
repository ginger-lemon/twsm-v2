import React from "react";
import Styles from './InfoCard.module.css'

function InfoCard({ children }) {
    return (
        <div className={Styles.infoCard}>  
            {children}
        </div>
    );
}

export default InfoCard;
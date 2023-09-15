import React from "react";
import Styles from './SuggestCard.module.css'

function SuggestCard() {
    return (
        <div className={Styles.container}>
            <h3>為您推薦</h3>
            <div>一些內容</div>
        </div>
    );
}

export default SuggestCard;
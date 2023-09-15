import React from "react";
import Styles from './Panel.module.css'

function CloseButton() {
    return (
        <div className={Styles.closeButton}>
            <button>
                Close
            </button>
        </div>
    );
}

export default CloseButton;
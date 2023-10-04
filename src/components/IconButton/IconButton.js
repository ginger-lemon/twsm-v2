import React from "react";
import Styles from './IconButton.module.css'

// button 內包 icon 

function IconButton({children, buttonType}) {
    return (
        <div className={Styles.button}>
            <button 
                type={buttonType}
            >
                {children}
            </button>
        </div>
    );
}

export default IconButton;
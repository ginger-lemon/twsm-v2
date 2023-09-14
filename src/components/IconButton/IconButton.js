import React from "react";
import Styles from './IconButton.module.css'

// button 內包 icon 

function IconButton({children}) {
    return (
        <div className={Styles.button}>
            <button >
                {children}
            </button>
        </div>
    );
}

export default IconButton;
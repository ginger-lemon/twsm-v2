import React from "react";
import Styles from './IconButton.module.css'

// button 內包 icon 

const IconButton = ({children, buttonType, handleClick}) => {
    return (
        <div className={Styles.button}>
            <button 
                type={buttonType}
                onClick={handleClick}
            >
                {children}
            </button>
        </div>
    );
}

export default IconButton;
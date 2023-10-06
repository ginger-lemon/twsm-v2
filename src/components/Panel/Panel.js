import React, { useState } from "react";
import Styles from './Panel.module.css'
import SearchBar from "../searchBar/SearchBar";

const Panel = ({ children }) => {
    const [isClose, setIsClose] = useState(false)
    
    const panelStyle = isClose ? `${Styles.panel} ${Styles.panelClosed}` : Styles.panel
    const buttonStyle = isClose ? Styles.buttonWrapperClosed : Styles.buttonWrapper
 
    const handleClick = () => {
        setIsClose(!isClose)
        console.log('press button')
    }

    return (
        <div className={Styles.container}>
            <div 
                className={panelStyle}
            >
                <div className={Styles.input}>
                    <SearchBar />
                </div>
                { children }
            </div>
            <div className={buttonStyle}>
                <button
                    className={Styles.button}
                    onClick={handleClick}
                >
                    {isClose ? 'Open' : 'Close'}
                </button>
            </div>
        </div>
    );
}

export default Panel;
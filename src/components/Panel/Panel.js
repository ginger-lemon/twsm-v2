import React, { useState } from "react";
import Styles from './Panel.module.css'

const Panel = ({ children }) => {
    const [isClose, setIsClose] = useState(false)
    // 處理按下 Close 元件會把 panel 收起來（display: none + 淡出動畫效果？

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
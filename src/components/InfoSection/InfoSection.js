import React, { Children } from "react";
import Styles from './InfoSection.module.css'

function MainSection({children}) {
    return (
        <div className={Styles.section}>
            {children}
        </div>
    );
}

export default MainSection;
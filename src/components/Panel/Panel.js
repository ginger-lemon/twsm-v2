import React, { Children } from "react";
import Styles from './Panel.module.css'
import CloseButton from "./CloseButton";

function Panel({children}) {
    return (
        <div className={Styles.section}>
            <div>
                {children}
            </div>
            <CloseButton />
        </div>
    );
}

export default Panel;
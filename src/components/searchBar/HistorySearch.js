import React from "react";
import Styles from './HistorySearch.module.css'
import PlantIcon from '../../images/icon-plant.svg'
import RemoveIcon from '../../images/icon-remove.svg'
import IconButton from "../IconButton/IconButton";

const HistorySearch = () => {
    
    return (
        <div className={Styles.history}>
                <img
                    className={Styles.plantIcon} 
                    src={PlantIcon}
                    alt="Search history"
                />
                <span>   香料一</span>
                <IconButton>
                    <img 
                        className={Styles.removeIcon}
                        src={RemoveIcon}
                        alt="Remove history"
                    />
                </IconButton>
        </div>
    );
}

export default HistorySearch;
import React from "react";
import Styles from './SearchHelperCard.module.css'

const SearchHelperCard = ({ title, description, datas, handleClick}) => {

    return (
        <div className={Styles.container}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={Styles.section}>
                {datas && 
                    datas.map((data, key) => (
                        <button
                            key={key}
                            className={Styles.keyword}
                            onClick={handleClick}
                        >
                            {data.name}
                        </button>
                    )) 
                }
            </div>
        </div>
    );
}

export default SearchHelperCard;
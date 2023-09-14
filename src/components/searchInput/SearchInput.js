import React from "react";
import Styles from './SearchInput.module.css'
import SearchIcon from '../../images/icon-search.svg'
import HistorySearch from './HistorySearch'
import IconButton from '../IconButton/IconButton'

function SearchInput() {
    return (
        <div className={Styles.container}>
            <form >
                <div className={Styles.form}>
                    <input
                        className={Styles.input}
                        placeholder="請輸入香料名稱"
                    >
                    </input>
                    <IconButton>
                        <img 
                            src={SearchIcon}
                            className={Styles.searchIcon}
                            alt=""
                        />
                    </IconButton>
                </div>
            </form>
            {/* 歷史搜尋紀錄 */}
            {/* <HistorySearch /> */}
        </div>
    );
}

export default SearchInput


import React, { useRef, useState } from "react";
import Styles from './SearchInput.module.css'
import SearchIcon from '../../images/icon-search.svg'
import HistorySearch from './HistorySearch'
import IconButton from '../IconButton/IconButton'

function SearchInput() {
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef();

    return (
        <div className={Styles.container}>
            <form 
                name="queryWord"
            >
                <div className={Styles.form}>
                    <input
                        className={Styles.input}
                        placeholder="請輸入香料名稱"
                        ref={inputRef}
                        onFocus={() => {
                            setIsFocus(true)
                        }}
                        onBlur={() => {
                            setIsFocus(false)
                        }}
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
            <div
                className={Styles.history}
                style = {{ display: isFocus ? 'block' : 'none' }}
            >
                {/* 當引入資料時需加上短路邏輯確認有歷史紀錄 */}
                <HistorySearch />
            </div>
            
        </div>
    );
}

export default SearchInput


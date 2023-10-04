import React, { useRef, useState } from "react";
import Styles from './SearchBar.module.css'
import SearchIcon from '../../images/icon-search.svg'
import HistorySearch from './HistorySearch'
import IconButton from '../IconButton/IconButton'

import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from '../../redux/search/searchSlice'

const SearchBar = ({ handleSubmit, handleKeydown }) => {
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef()
    const inputValue = useSelector(state => state.search.inputValue)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const value = e.target.value 
        console.log(value)
        dispatch(setInputValue(value))
    }

    return (
        <div className={Styles.container}>
            <form 
                id="search"
                name="search"
                onSubmit={handleSubmit}
            >
                <div className={Styles.form}>
                    <input
                        className={Styles.input}
                        placeholder="請選擇下方的香料名稱"
                        value={inputValue}
                        onChange={handleChange}
                        ref={inputRef}
                        onFocus={() => {
                            setIsFocus(true)
                        }}
                        onBlur={() => {
                            setIsFocus(false)
                        }}
                        onKeyDown={handleKeydown}
                    >
                    </input>
                    <IconButton buttonType="submit">
                        <img 
                            src={SearchIcon}
                            className={Styles.searchIcon}
                            alt=""
                        />
                    </IconButton>
                </div>
            </form>
            {/* 歷史搜尋紀錄 */}
            {/* 當引入資料時需加上短路邏輯確認有歷史紀錄 */}
            {/* <div
                className={Styles.history}
                style = {{ display: isFocus ? 'block' : 'none' }}
            >
                
                <HistorySearch />
            </div> */}
        </div>
    );
}

export default SearchBar

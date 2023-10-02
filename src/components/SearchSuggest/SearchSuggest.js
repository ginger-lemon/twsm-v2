import React from "react";
import Styles from './SearchSuggest.module.css'
import { suggestKeyword } from "./suggestKeyword";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedKeyword, setInputValue } from "../../redux/search/searchSlice";

function SearchSuggest() {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        const value = e.target.textContent
        dispatch(setSelectedKeyword(value))
        dispatch(setInputValue(value))
        // console.log(value)
    }

    const keywords = suggestKeyword.map((keyword, id) => (
        <button 
            key={id} 
            className={Styles.keyword}
            onClick={handleClick}
        >
            {keyword.name}
        </button>
    ))

    return (
        <div className={Styles.container}>
            <h3>為您推薦</h3>
            <p>選一個常見的香料吧！</p>
            <div className={Styles.section}>
                {keywords}
            </div>
        </div>
    );
}

export default SearchSuggest;
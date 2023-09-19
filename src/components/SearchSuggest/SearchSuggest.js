import React from "react";
import Styles from './SearchSuggest.module.css'
import { suggestKeyword } from "./suggestKeyword";

function SearchSuggest() {
    const keywords = suggestKeyword.map((keyword, id) => (
        <button key={id} className={Styles.keyword}>
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
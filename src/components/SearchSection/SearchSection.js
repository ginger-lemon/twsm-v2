import React from "react";
import Styles from './SearchSection.module.css'
import SearchInput from "../SearchInput/SearchInput";
import SuggestCard from "../SearchSuggest/SearchSuggest";

function SearchSection() {
    return (
        <section className={Styles.section}>
            <SearchInput />
            {/* 已經搜尋的時候隱藏為你推薦 */}
            {/* <SuggestCard /> */}
        </section>
    );
}

export default SearchSection;
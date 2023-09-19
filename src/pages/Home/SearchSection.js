import React from "react";
import Styles from './SearchSection.module.css'
import SearchInput from "../../components/SearchInput/SearchInput";
import SearchSuggest from "../../components/SearchSuggest/SearchSuggest";

function SearchSection() {
    return (
        <section className={Styles.section}>
            <SearchInput />
            <SearchSuggest />
        </section>
    );
}

export default SearchSection;
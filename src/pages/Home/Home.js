import React, { useEffect, useState } from "react";
import Styles from './Home.module.css'
import MainLayout from "../../layout/MainLayout/MainLayout";
import SearchBar from "../../components/searchBar/SearchBar";
import SearchHelperCard from "../../components/SearchHelperCard/SearchHelperCard";

import suggestedList from '../../api/keywords/suggestedList.json'
import searchableList from '../../api/keywords/searchableList.json'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMapDatas, fetchTextDatas } from '../../redux/fetch/fetchSlice'
import { useNavigate } from "react-router-dom";
import { setInputValue, setSelectedValue } from "../../redux/search/searchSlice";

const Home = () => {
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.search.inputValue)
    const textStatus = useSelector(state => state.fetch.textStatus)

    const navigate = useNavigate()
    
    // 連線到 API 取得資料
    const startSearch = (e) => {
        e.preventDefault()
        dispatch(fetchTextDatas(inputValue))
        dispatch(fetchMapDatas(inputValue))

        if (textStatus === 'successed') {
            navigate('/results')
        }
    } 

    const startSearchByEnter = (e) => {
        if (e.key === 'Enter') {
            startSearch(e)
        }
    }

    const startSearchByClickButton =  (e) => {
        const value = e.target.textContent
        dispatch(setInputValue(value))
        dispatch(setSelectedValue(value))

        dispatch(fetchTextDatas(value))
        dispatch(fetchMapDatas(value))

        navigate('/results')

        // if (textStatus !== 'idle') {
        //     navigate('/results')
        // }
    }

    return (
        <MainLayout>
            <section className={Styles.section}>
                <SearchBar 
                    handleSubmit={startSearch}
                    handleKeydown={startSearchByEnter}
                />
                <SearchHelperCard
                    title="你有聽過的台灣原生香料"
                    description="按下下方的任一個香料名稱搜尋看看！"
                    datas={suggestedList}
                    handleClick={startSearchByClickButton}
                />
                <SearchHelperCard
                    title="還有哪些香料呢？"
                    description="按下下方的任一個香料名稱搜尋看看！"
                    datas={searchableList}
                    handleClick={startSearchByClickButton}
                />
            </section>
        </MainLayout>
    );
}

export default Home;
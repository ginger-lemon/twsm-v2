import React, { useRef, useState } from "react";
import Styles from './SearchBar.module.css'
import SearchIcon from '../../images/icon-search.svg'
import IconButton from '../IconButton/IconButton'
import CloseIcon from '../../images/icon-remove.svg'

import { useSelector, useDispatch } from "react-redux";
import { setInputValue, setSelectedValue } from '../../redux/search/searchSlice'
import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleSubmit, handleKeydown }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inputValue = useSelector(state => state.search.inputValue)

    const isInitialInputValue = inputValue === '' // true | false
    const submitIcon = isInitialInputValue ? SearchIcon: CloseIcon


    const handleChange = (e) => {
        const value = e.target.value 
        console.log(value)
        dispatch(setInputValue(value))
    }

    const backToHome = (e) => {
        e.preventDefault()
        dispatch(setInputValue('')) // resetState
        dispatch(setSelectedValue('')) // resetState
        navigate('/')
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
                        onKeyDown={handleKeydown}
                    >
                    </input>
                    <IconButton 
                        buttonType="submit"
                        handleClick={isInitialInputValue ? null : backToHome}
                    >
                        <img 
                            src={submitIcon}
                            className={Styles.searchIcon}
                            alt=""
                        />
                    </IconButton>
                </div>
            </form>
        </div>
    );
}

export default SearchBar


import React from "react";
import Styles from './Nav.module.css'
import IconButton from '../IconButton/IconButton'
import logoIcon from '../../images/logo.svg'
import RecentIcon from '../../images/icon-recent.svg'
import BookmarkIcon from '../../images/icon-bookmark.svg'
import History from "../../pages/History/Histoy";
import Bookmark from "../../pages/Bookmark/Bookmark";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetValue, setInputValue } from "../../redux/search/searchSlice";
import { resetDatas } from "../../redux/fetch/fetchSlice";

const Nav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const backToHome = () => {
        dispatch(setInputValue(''))
        dispatch(resetDatas())
        navigate('/')
    }

    return (
        <nav className={Styles.nav}>
            <div className={Styles.navBlock}>
                <IconButton handleClick={backToHome}>
                        <img 
                            src={logoIcon} 
                            alt=""
                            className={Styles.logoIcon}
                        />
                </IconButton>
            </div>
            <div className={Styles.navBlock}>
                <IconButton>
                    <Link to="/history" element={<History />}>
                        <img 
                            src={RecentIcon} 
                            alt=""
                            className={Styles.recentIcon}
                        />
                    </Link>
                </IconButton>
                <p>已搜尋</p>
            </div>
            <div className={Styles.navBlock}>
                <IconButton>
                    <Link to="/bookmark" element={<Bookmark />}>
                        <img 
                            src={BookmarkIcon} 
                            alt=""
                            className={Styles.bookmarkIcon}
                        />
                    </Link>
                </IconButton>
                <p>已儲存</p>
            </div>
        </nav>
    );
}

export default Nav;
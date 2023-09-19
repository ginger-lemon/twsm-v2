import React from "react";
import Styles from './Nav.module.css'
import IconButton from '../IconButton/IconButton'
import logoIcon from '../../images/logo.svg'
import RecentIcon from '../../images/icon-recent.svg'
import BookmarkIcon from '../../images/icon-bookmark.svg'
import { Link } from "react-router-dom";
import Home from "../../pages/00-Home/Home";
import History from "../../pages/01-History/Histoy";
import Bookmark from "../../pages/02-Bookmark/Bookmark";
import Overview from "../../pages/10-Overview/Overview";

function Nav() {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.navBlock}>
                <IconButton>
                    <Link to="/" element={<Home />}>
                        <img 
                            src={logoIcon} 
                            alt=""
                            className={Styles.logoIcon}
                        />
                    </Link>
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
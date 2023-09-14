import React from "react";
import Styles from './Nav.module.css'
import IconButton from '../IconButton/IconButton'
import logoIcon from '../../images/logo.svg'
import RecentIcon from '../../images/icon-recent.svg'
import BookmarkIcon from '../../images/icon-bookmark.svg'

function Nav() {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.navBlock}>
                <IconButton>
                    <img 
                        src={logoIcon} 
                        alt=""
                        className={Styles.logoIcon}
                    />
                </IconButton>
            </div>
            <div className={Styles.navBlock}>
                <IconButton>
                    <img 
                        src={RecentIcon} 
                        alt=""
                        className={Styles.recentIcon}
                    />
                </IconButton>
                <p>已搜尋</p>
            </div>
            <div className={Styles.navBlock}>
                <IconButton>
                    <img 
                        src={BookmarkIcon} 
                        alt=""
                        className={Styles.bookmarkIcon}
                    />
                </IconButton>
                <p>已儲存</p>
            </div>
        </nav>
    );
}

export default Nav;
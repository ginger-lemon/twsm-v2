import React, { useEffect, useState } from "react";
import Styles from './Bookmark.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import InfoCard from "../../components/InfoCard/InfoCard";
import BookmarkItem from "./BookmarkItem";

const Bookmark = () => {
    const bookmarkValue = JSON.parse(localStorage.getItem("bookmark"))
    const reversedBookmarkValue = bookmarkValue && [...bookmarkValue].reverse()
    
    // rendered layout
    const initialLatestBookmark = (
        <div className={Styles.nothing}>
            <h4>
                目前沒有我的最愛！
            </h4>
        </div>
    )

    const bookmarkList = bookmarkValue && reversedBookmarkValue.map(
        (value, index) => (
            <BookmarkItem 
                index={index}
                imgURL={value.imgURL}
                name={value.name}
                scientifiName={value.scientifiName}
                comments={value.comments}
                bookmarkValue={bookmarkValue}
            />
        )
    )

    return (
        <MainLayout>
            <Panel>
                <div className={Styles.container}>
                    <InfoCard>
                        {bookmarkValue ? 
                            bookmarkList : initialLatestBookmark
                        }
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
}

export default Bookmark;
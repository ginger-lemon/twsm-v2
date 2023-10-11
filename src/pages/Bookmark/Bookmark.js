import React, { useState } from "react";
import Styles from './Bookmark.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import InfoCard from "../../components/InfoCard/InfoCard";

const Bookmark = () => {
    const bookmarkValue = JSON.parse(localStorage.getItem("bookmark"))
    const reversedBookmarkValue = bookmarkValue && [...bookmarkValue].reverse()

    // TODO: map 出來的每個元素都有獨立的 state 且不互相干擾
    const [isEdit, setIsEdit] = useState(reversedBookmarkValue.map(() => false))
    const [comments, setComments] = useState(reversedBookmarkValue.map(() => ''))

    const handleToggleToEdit = (e, index) => {
        // toggledIndex 是字串，要變成數字
        const toggledIndex = parseInt(e.currentTarget.dataset.index) 
        console.log('toggledIndex: ', toggledIndex)
        console.log('index: ', index)
        if (index === toggledIndex) {
            console.log('我選到同一個')
            setIsEdit(true)
        } else {
            return
        }
    } 

    const handleEditComments = (e) => {
        setComments((prevComments) => {
            [...prevComments, e.target.value]
        })
    }

    const handleSubmitComments = (e, index) => {
        e.preventDefault()
        const formIndex = e.currentTarget.dataset.index // later need: bookmarkValue.length - formIndex - 1
        console.log(formIndex)
        const form = e.currentTarget.form
        const formData = new FormData(form)
        const formComments = formData.get("comments")

        const [findData] = bookmarkValue.filter(
            (data, index) => index === bookmarkValue.length - formIndex - 1 
        )
        const addComments = findData && {
            ...findData,
            comments: formComments,
        }
        const updatingData = bookmarkValue.map((value, index) => {
            if (index === bookmarkValue.length - formIndex - 1) {
                return addComments
            }
            return value
        })

        localStorage.setItem("bookmark", JSON.stringify(updatingData))
        setIsEdit(false)
    }

    // rendered layout
    const initialLatestBookmark = (
        <div className={Styles.nothing}>
            <h4>
                目前沒有我的最愛！
            </h4>
        </div>
    )

    const bookmarkList = bookmarkValue && reversedBookmarkValue.map((value, index) => (
        <div key={index} className={Styles.section}>
            <div className={Styles.card} onClick={() => console.log('切到結果頁')}>
                <div className={Styles.imgWrapper}>
                    <img 
                        className={Styles.img}
                        src={value.imgURL}
                        alt="" 
                    />
                </div>
                <div className={Styles.textWrapper}>
                    <h3>{value.name}</h3>
                    <p>{value.scientifiName}</p>
                </div>
            </div>
            <div className={Styles.comment}>
                {/* 如果有 comment 資料顯示編輯備註，反之則新增備註 */}
                {/* 如果有 comments 就顯示在這裡 */}
                <div>{value.comments}</div>
                {!isEdit[index] && (
                    <p 
                        data-index={index}
                        onClick={(e) => handleToggleToEdit(e, index)}
                    >
                        新增備註
                    </p>
                )}
                {isEdit[index] && (
                    <form name="commentsForm" data-index={index}>
                        <input 
                            type="text"
                            name="comments"
                            id="comments"
                            className={Styles.input} 
                            onChange={(e) => handleEditComments(value, index)}
                        >
                        </input>
                        <button type="submit" onClick={e => handleSubmitComments(e)}>完成</button>
                    </form>
                )}  
            </div>
        </div>
    ))


    return (
        <MainLayout>
            <Panel>
                <div className={Styles.container}>
                    <InfoCard>
                        {bookmarkValue ? bookmarkList : initialLatestBookmark}
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
}

export default Bookmark;

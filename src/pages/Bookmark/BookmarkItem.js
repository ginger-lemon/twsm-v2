import React, { useState } from "react";
import Styles from './BookmarkItem.module.css'

const BookmarkItem = ({ 
        index, 
        imgURL, 
        name, 
        scientifiName, 
        comments,
        bookmarkValue,
    }) => {
    
    const [isEdit, setIsEdit] = useState(false)
    const [commentText, setCommentText] = useState(
        () => {
            return bookmarkValue[bookmarkValue.length - index - 1].comments ? 
                bookmarkValue[bookmarkValue.length - index - 1].comments : null
        }
    )

    const handleEditComments = (e) => {
        setCommentText(e.target.value)
    }

    const handleToggleToEdit = () => {
        console.log('切換到編輯模式')
        setIsEdit(true)
    } 

    const handleSubmitComments = (e) => {
        e.preventDefault()
        const formIndex = e.currentTarget.form.dataset.index
        // console.log(formIndex)

        const [ findData ] = bookmarkValue && bookmarkValue.filter(
            (data, index) => index === bookmarkValue.length - formIndex - 1 
        )
        console.log(findData)
        const addComments = findData && {
            ...findData,
            comments: commentText,
        }
        // console.log(addComments)
        const updatingData = bookmarkValue.map(
            (data, index ) => {
                if (index === bookmarkValue.length - formIndex - 1) {
                    return addComments
                }
                return data
            }
        )

        // console.log(updatingData)
        localStorage.setItem("bookmark", JSON.stringify(updatingData))
        setIsEdit(false)
        // 需要重新 render 元件
    }

    // TODO: 點選學名部分可以連結到搜尋結果頁面
    const handleToggleToResults = () => {
        console.log('切到結果頁')
    }

    return (
        <div key={index} className={Styles.section}>
            <div 
                className={Styles.card} 
                onClick={handleToggleToResults}
            >
                <div className={Styles.imgWrapper}>
                    <img 
                        className={Styles.img}
                        src={imgURL}
                        alt="" 
                    />
                </div>
                <div className={Styles.textWrapper}>
                    <h3>{name}</h3>
                    <p>{scientifiName}</p>
                </div>
            </div>
            <div className={Styles.comments}>
                {!isEdit &&  
                    (
                        <div className={Styles.commentsText}>
                            <p>{comments}</p>
                        </div>
                    )
                }
                {isEdit ? 
                    (
                        <form   
                            name="commentsForm"     
                            data-index={index}
                            className={Styles.form}
                        >
                            <input 
                                type="text"
                                name="comments"
                                id="comments"
                                className={Styles.input} 
                                defaultValue={commentText}
                                placeholder="請輸入備註"
                                onChange={(e) => handleEditComments(e)}
                            >
                            </input>
                            <button type="submit" 
                            className={Styles.button}
                            onClick={(e) => handleSubmitComments(e, index)}
                            >
                                完成
                            </button>
                        </form>
                    ) : (
                        <p 
                            data-index={index}
                            onClick={(e) => handleToggleToEdit(e)}
                        >
                            {commentText ? '編輯備註' : '新增備註'}
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default BookmarkItem
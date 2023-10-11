import React, { useEffect, useState } from "react";
import Styles from './Results.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsSection/ResultsTabs";
import InfoCard from "../../components/InfoCard/InfoCard";

import NoImageIcon from '../../images/icon-noImage.svg'
import LoadingIcon from '../../images/icon-loading.svg'
import BookmarkIcon from '../../images/icon-star.svg'
import SavedBookmarkIcon from '../../images/icon-star-saved.svg'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInputValue } from "../../redux/search/searchSlice";
import { resetDatas } from "../../redux/fetch/fetchSlice";

const Results = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const textData = useSelector(state => state.fetch.textData)
    const textStatus = useSelector(state => state.fetch.textStatus)
    const spiceData = useSelector(state => state.fetch.spiceData)
    const spiceStatus = useSelector(state => state.fetch.spiceStatus)
    const inputValue = useSelector(state => state.search.inputValue)

    const [searchedValue, setSearchedValue] = useState([])
    const [isBookmarked, setIsBookmarked] = useState(
        () => {
            const data = JSON.parse(localStorage.getItem("bookmark")) // null?
            const checkData = data && data.find(data => data.name === inputValue)
            if (data === null || data.length === 0 || checkData === undefined) {
                return false
            } else  {
                return true
            }
        }
    )

    const tagsData = spiceStatus === 'successed' && spiceData.tags 

    // 滑動圖片時出現我的最愛星星

    // localStorage 儲存搜尋成功的結果
    useEffect(() => {
        const storagedValue = JSON.parse(localStorage.getItem("history"))
        if (storagedValue) {
            setSearchedValue(storagedValue)
        }
    }, [])

    useEffect(() => {
        if (textData && inputValue) {
            const historyValue = [...searchedValue, {
                name: inputValue,
                scientificName: textData.SciName,
                imgURL: spiceData.imgURL
            }]
            localStorage.setItem("history", JSON.stringify(historyValue))
        }
    }, [textData, inputValue])

    // TODO: 如果當 inputValue 為空字串時不顯示 results/flavor/utilization

    const handleClickBookmark = () => {
        const bookmarks = JSON.parse(localStorage.getItem("bookmark"))   

        let addedBookmark
        if (textStatus === 'successed' && spiceStatus === 'successed') {
            addedBookmark = {
                name: inputValue,
                scientifiName: textData.SciName,
                imgURL: spiceData && spiceData.imgURL,
                taxon: [textData.Class, textData.Order, textData.Family],
                comments: '',
            }
        }
        
        const checkData = bookmarks && bookmarks.find(data => data.name === inputValue) // undefined = 沒有重複

        if (bookmarks === null || bookmarks.length === 0 || checkData === null) {
            localStorage.setItem("bookmark", JSON.stringify([addedBookmark]))
            setIsBookmarked(true)

        } else if (checkData === undefined) {
            localStorage.setItem("bookmark", JSON.stringify([...bookmarks, addedBookmark]))
            setIsBookmarked(true)

        } else if (checkData !== undefined) {
            const removeBookmark = bookmarks.filter(data => data.name !== inputValue)
            localStorage.setItem("bookmark", JSON.stringify(removeBookmark))
            setIsBookmarked(false)
        }

    }

    // 不同狀態的 layout
    const loadingLayout = (
        <>
            <div className={Styles.img}>
                    <img 
                        className={Styles.loadingImg}
                        src={NoImageIcon}
                        alt=""
                    />
                </div>
                <InfoCard>
                    <div className={Styles.basicInfo}>
                        <div className={Styles.loadingPlaceholder}></div>
                        <div className={Styles.loadingPlaceholder}></div>
                    </div>
                </InfoCard>
                <ResultsTabs
                    activeTab='results'
                >   
                    <div className={Styles.loadingIconWrapper}>
                        <img 
                            className={Styles.loadingIcon}
                            src={LoadingIcon}
                            alt=""
                        />
                    </div>
                </ResultsTabs>
        </>
    )
   
    const successedLayout = (
        <>
            <div className={Styles.img}>
                    {/* 使用 mock data */}
                    <img 
                        src={spiceData.imgURL}
                        alt=""
                    />
                    {/* hover 時才顯示 star */}
                    <div className={Styles.bookmarkWrapper}>
                        <button 
                            onClick={(e) => handleClickBookmark(textData, spiceData)}
                        >
                            <img 
                                src={isBookmarked ? SavedBookmarkIcon : BookmarkIcon}
                                className={Styles.bookmark}
                            />
                        </button>
                    </div>
                </div>
                <InfoCard>
                    <div className={Styles.basicInfo}>
                        <div>
                            <h1 className={Styles.h1}>
                                {textData && textData.ChineseName}
                            </h1>
                            <tags className={Styles.tagsWrapper}>
                                {tagsData && tagsData.map((data, i) => (
                                    <div key={i} className={Styles.tag}>{data}</div>
                                ))}
                            </tags>
                        </div>
                        <p className={Styles.scientifiName}>
                            {textData && textData.SciName}
                        </p>
                        <p>
                            {`${textData && textData.Class} > ${textData && textData.Order} > ${textData && textData.Family}`}
                        </p>
                    </div>
                </InfoCard>
                <ResultsTabs
                    activeTab='results'
                >
                    <h4>習性</h4>
                    <p>{textData && textData.Behavior}</p>
                    <h4>特徵</h4>
                    <p>{textData && textData.Characters}</p>
                </ResultsTabs>
        </>
    )

    const failedLayout = (
        <div className={Styles.failed}>
            <p>歹勢！！找不到這筆資料</p>
            <p>請稍等片刻，將為您重新返回首頁</p>
        </div>
    )

    // TODO: 根據 status render 對應版面
    let renderedLayout;

    switch (textStatus) {
        case 'loading':
            renderedLayout = loadingLayout
            break;

        case 'successed':
            renderedLayout = successedLayout
            break;

        case 'failed':
            renderedLayout = failedLayout
            dispatch(setInputValue(''))
            dispatch(resetDatas())
            setTimeout(() => {
                navigate('/')
            }, 2000)
            break;

        // switch-case 最後要記得設定 default
        default:
            renderedLayout = loadingLayout
    }
    
    return (
        <MainLayout>
           <Panel>
                {renderedLayout}
           </Panel>
        </MainLayout>
    );
}

export default Results;
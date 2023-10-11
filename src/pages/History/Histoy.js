import React, { useEffect, useState } from "react";
import Styles from './History.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import InfoCard from "../../components/InfoCard/InfoCard";
import { useDispatch } from "react-redux";
import { setInputValue } from "../../redux/search/searchSlice";

const History = () => {
    const dispatch = useDispatch()
    // get data from localSotrage
    const historyValue = JSON.parse(localStorage.getItem("history"))

    const initialLatestHistory = (
        <div className={Styles.nothing}>
            <h4>
                目前沒有搜尋紀錄哦！
            </h4>
        </div>
    )
    const [theLatestHistory, setTheLatestHistory] = useState(
        () => {
           historyValue === null || historyValue.length === 0 && initialLatestHistory
        }
    )

    const [selectedIndex, setSelectedIndex] = useState([])

    const renderHistoryList = (historyValue) => {
        if (historyValue && historyValue.length < 5) {
            const historyList = [...historyValue].reverse()  
            const lessThan5Layout = historyList.map((data, index) => (
                <div key={historyList.length - index - 1} className={Styles.section}>
                    <div 
                        className={Styles.listWrapper} 
                        onClick={() => console.log('按我自動搜尋')}
                    > 
                        <div className={Styles.imgWrapper}>
                            <img 
                                src={data.imgURL} 
                                className={Styles.img} 
                                alt={data.name}
                            />
                        </div>
                        <div className={Styles.textsWrapper}>
                            <h3>{data.name}</h3>
                            <p>{data.scientificName}</p>
                        </div>
                    </div>
                    <input 
                        type="checkbox" 
                        className={Styles.checkbox} 
                        id={historyList.length - index - 1} 
                        onClick={(e) => handleSelectedHistory(e, index)}
                        checked={selectedIndex.includes(historyList.length - index - 1) ? true : false}
                    >
                    </input>
                </div>
            ))
            setTheLatestHistory(lessThan5Layout)
            return
    
        } else if(historyValue && historyValue.length >= 5) {
            const historyList = [...historyValue]
            const moreThan5Layout = historyList.reverse().slice(0, 5).map((data, index) => (
                <div 
                    key={historyList.length - index - 1} 
                    className={Styles.section}
                >
                    <div 
                        className={Styles.listWrapper} 
                        onClick={() => console.log('按我自動搜尋')}
                    >
                        <div className={Styles.imgWrapper}>
                            <img src={data.imgURL} className={Styles.img} alt={data.name}/>
                        </div>
                        <div className={Styles.textsWrapper}>
                            <h3>{data.name}</h3>
                            <p>{data.scientificName}</p>
                        </div>
                    </div>
                    <input 
                        type="checkbox" 
                        className={Styles.checkbox} 
                        id={historyList.length - index - 1}
                        onClick={(e) => handleSelectedHistory(e, index)}
                        checked={selectedIndex.includes(historyList.length - index - 1) ? true : false}
                    >
                    </input>
                </div>
            ))
            setTheLatestHistory(moreThan5Layout)
            return

        } else  if (historyValue === null || historyValue.length === 0){
            return initialLatestHistory
            
        } 
    }

    // 根據 selectedIndex 變化 re-render theLastestHistory
    useEffect(() => {
        if (historyValue === null || historyValue.length === 0) {
            setTheLatestHistory(initialLatestHistory)
            dispatch(setInputValue(''))
            return
        } else if (historyValue) {
            console.log(selectedIndex)
            renderHistoryList(historyValue)
            return
        }
    }, [selectedIndex])
    
    const handleSelectedHistory = (e, index) => {
        const isChecked = e.target.checked
        const clickedIndex = historyValue.length - index - 1

        if (isChecked !== false) {
            setSelectedIndex((prevSelectedIndex) => [...prevSelectedIndex, clickedIndex])
        } else if (isChecked === false) {
            setSelectedIndex(
                [...selectedIndex].filter(
                    // selectedIndex 不包含現在選到的 index 
                    item => item !== clickedIndex
                )
            )
        }
    }

    const handleDeleteSelectedHistory = () => {
        let undeletedHistory = historyValue.filter(
            // historyValue 內沒有儲存 index ，
            // 透過 selectedIndex.includes() 代入 index 去找相同的，再排除
            (data, index) => !selectedIndex.includes(index)
        )
        console.log(undeletedHistory)

        // 篩選後的新陣列儲存到 localStorage
        localStorage.setItem("history", JSON.stringify(undeletedHistory))

        // reset selectedIndex 
        setSelectedIndex([])

        setTheLatestHistory(
           () => renderHistoryList(undeletedHistory) 
        )
    }

    return (
        <MainLayout>
            <Panel>
                <div className={Styles.container}>
                    <InfoCard>
                        <div className={Styles.toolBar}>
                            <div className={Styles.buttonWrapper}>
                                <button
                                    className={Styles.button}
                                    onClick={handleDeleteSelectedHistory}
                                >
                                    刪除
                                </button>
                            </div>
                            <div className={Styles.clearf}></div>
                        </div>
                        {theLatestHistory}
                    </InfoCard>
                </div>
            </Panel>
        </MainLayout>
    );
}

export default History;
import React, { useEffect, useState } from "react";
import Styles from './History.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import InfoCard from "../../components/InfoCard/InfoCard";

const History = () => {
    // get data from localSotrage
    const historyValue = JSON.parse(localStorage.getItem("history"))
    // console.log(historyValue)

    const initialLatestHistory = (
        <div className={Styles.nothing}>
            <h4>
                還未有搜尋紀錄哦！
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
                        onClick={(e) => handleSelectedHistory(e, index)}></input>
                </div>
            ))
            setTheLatestHistory(moreThan5Layout)
            return

        } else  if (historyValue === null || historyValue.length === 0){
            return initialLatestHistory
            
        } 
    }

    useEffect(() => {
        if (historyValue === null || historyValue.length === 0) {
            setTheLatestHistory(initialLatestHistory)
            return
        } else if (historyValue) {
            renderHistoryList(historyValue)
            return
        }
    }, [selectedIndex])
    
    const handleSelectedHistory = (e, index) => {
        const isCheck = e.target.checked
        if (isCheck !== false) {
            setSelectedIndex([...selectedIndex, index])
        }
    }

    // TODO: 刪除按鈕事件處理函數
    // 加入 selectedIndex 
    const handleDeleteSelectedHistory = () => {
        let undeletedHistory;
        const renderUndeletedList = () => {
            localStorage.setItem("history", JSON.stringify(undeletedHistory))
            const newList = JSON.parse(localStorage.getItem("history"))
            selectedIndex && renderHistoryList(newList)
        }

        if (historyValue.length - selectedIndex.length == 0) {
            undeletedHistory = historyValue.filter(
                (data, index) => !selectedIndex.includes( index) 
            )

            undeletedHistory.length === 0 && localStorage.setItem("history", JSON.stringify([]))

            setTheLatestHistory(initialLatestHistory)
            return

        } else if (historyValue.length - selectedIndex.length != 0) {
            undeletedHistory = historyValue.filter(
                (data, index) => !selectedIndex.includes(historyValue.length - index - 1) 
            )

            renderUndeletedList(undeletedHistory)
            return
        } 
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
import React from "react";
import Styles from './Results.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsSection/ResultsTabs";
import InfoCard from "../../components/InfoCard/InfoCard";

import { useDispatch, useSelector } from "react-redux";


const Results = () => {
    const textData = useSelector(state => state.fetch.textData)

    // TODO: loading 中版面
    // TODO: failed 版面、跳回 Home

    return (
        <MainLayout>
           <Panel>
                <div className={Styles.img}>
                    {/* 使用 mock data */}
                    <img 
                        src='https://c2.staticflickr.com/2/1897/42413024160_93da2dd7dc_b.jpg'
                        alt=""
                    />
                </div>
                <InfoCard>
                    <div className={Styles.basicInfo}>
                        <div>
                            <h1 className={Styles.h1}>
                                {textData && textData.ChineseName}
                            </h1>
                        </div>
                        <p className={Styles.scientifiName}>
                            {textData && textData.SciName}
                        </p>
                        <p>
                            {textData && textData.Class} ＞{textData && textData.Order} ＞{textData && textData.Family}
                        </p>
                    </div>
                </InfoCard>
                {/* 可 render 巢狀路由元件的元素 */}
                <ResultsTabs
                    activeTab='results'
                >
                    <h4>習性</h4>
                    <p>{textData && textData.Behavior}</p>
                    <h4>特徵</h4>
                    <p>{textData && textData.Characters}</p>
                </ResultsTabs>
           </Panel>
        </MainLayout>
    );
}

export default Results;
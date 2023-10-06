import React from "react";
import Styles from './Results.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsSection/ResultsTabs";
import InfoCard from "../../components/InfoCard/InfoCard";

import NoImageIcon from '../../images/icon-noImage.svg'
import LoadingIcon from '../../images/icon-loading.svg'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetValue } from "../../redux/search/searchSlice";
import { resetDatas } from "../../redux/fetch/fetchSlice";

const Results = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const textData = useSelector(state => state.fetch.textData)
    const textStatus = useSelector(state => state.fetch.textStatus)

    const imgSrc = 'https://c2.staticflickr.com/2/1897/42413024160_93da2dd7dc_b.jpg' 

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
                        src={imgSrc}
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
            dispatch(resetValue())
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
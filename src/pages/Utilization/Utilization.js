import React, { useEffect } from "react";
import Styles from './Utilization.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsTabs/ResultsTabs";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../redux/search/searchSlice";
import { fetchSpiceDatas, fetchTextDatas } from "../../redux/fetch/fetchSlice";
import { useParams } from "react-router-dom";

const Utilization = () => {
    const dispatch = useDispatch()

    const { id } = useParams()
    
    // 避免重新整理時資料消失
    useEffect(() => {
        dispatch(setInputValue(id))
        dispatch(fetchTextDatas(id))
        dispatch(fetchSpiceDatas(id))
    }, [id])

    const data = useSelector(state => state.fetch.spiceData)

    return (
        <MainLayout>
           <Panel>
                <div className={Styles.wrapper}>
                    <ResultsTabs
                        activeTab='utilization'
                    >
                        <h4>應用</h4>
                        <p>{data.utilization}</p>

                    </ResultsTabs>
                </div>   
           </Panel>
        </MainLayout>
    );
} 

export default Utilization;
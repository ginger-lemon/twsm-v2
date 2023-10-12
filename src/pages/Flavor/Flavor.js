import React, { useEffect } from "react";
import Styles from './Flavor.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsTabs/ResultsTabs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInputValue } from "../../redux/search/searchSlice";
import { fetchSpiceDatas, fetchTextDatas } from "../../redux/fetch/fetchSlice";

const Flavor = () => {
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
                        activeTab='flavor'
                    >
                        <h4>香氣</h4>
                        <p>{data.flavor}</p>
                    </ResultsTabs>
                </div>
           </Panel>
        </MainLayout>
    );
} 

export default Flavor;


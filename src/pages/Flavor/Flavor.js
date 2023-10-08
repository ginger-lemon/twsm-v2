import React from "react";
import Styles from './Flavor.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsSection/ResultsTabs";
import { useSelector } from "react-redux";

const Flavor = () => {
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


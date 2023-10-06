import React from "react";
import Styles from './Utilization.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsSection/ResultsTabs";

const Utilization = () => {

    return (
        <MainLayout>
           <Panel>
                <div className={Styles.wrapper}>
                    <ResultsTabs
                        activeTab='utilization'
                    >
                        <h4>應用</h4>

                    </ResultsTabs>
                </div>   
           </Panel>
        </MainLayout>
    );
} 

export default Utilization;
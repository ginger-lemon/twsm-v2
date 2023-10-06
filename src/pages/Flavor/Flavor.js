import React from "react";
import Styles from './Flavor.module.css'
import MainLayout from "../../layout/mainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import ResultsTabs from "../../components/ResultsSection/ResultsTabs";

const Flavor = () => {

    return (
        <MainLayout>
           <Panel>
                <div className={Styles.wrapper}>
                    <ResultsTabs
                        activeTab='flavor'
                    >
                        香味
                    </ResultsTabs>
                </div>
           </Panel>
        </MainLayout>
    );
} 

export default Flavor;


import React from "react";
import Styles from './SubLayout.module.css'
import MainLayout from "../MainLayout/MainLayout";
import Panel from "../../components/Panel/Panel";
import SearchInput from "../../components/SearchInput/SearchInput";

function SubLayout({ children }) {
    return (
        <MainLayout>
            <Panel>
                <div className={Styles.input}>
                    <SearchInput />
                </div>
                {children}
            </Panel>
        </MainLayout>
    );
}

export default SubLayout
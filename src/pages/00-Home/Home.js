import React from "react";
import Styles from './Home.module.css'
import MainLayout from "../../layout/MainLayout/MainLayout";
import SearchSection from "./SearchSection";

function Home() {
    return (
        <MainLayout>
            <SearchSection />
        </MainLayout>
    );
}

export default Home;
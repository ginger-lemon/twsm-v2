import React from "react";
import Styles from './Home.module.css'
import MainLayout from "../../layout/MainLayout";
import SearchSection from "../../components/SearchSection/SearchSection";

function Home() {
    return (
        <MainLayout>
            <SearchSection />
        </MainLayout>
    );
}

export default Home;
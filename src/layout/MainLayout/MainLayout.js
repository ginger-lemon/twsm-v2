import React from "react";
import Styles from './MainLayout.module.css'
import Nav from "../../components/nav/Nav";
import Map from "../../components/map/Map";

const MainLayout = ({ children }) => {
    
    return (
        <div className={Styles.container}>
            <aside className={Styles.aside}>
                <Nav />
                {children}
            </aside>
            <main className={Styles.main}>
                <Map />
            </main>
        </div>
    );
}

export default MainLayout;

import React from "react";
import './styles/global.css'
import Styles from './App.module.css'
import Nav from './components/nav/Nav'
import SearchInput from './components/searchInput/SearchInput'
import Map from "./components/map/Map";
import Info from "./components/info/info";

function App() {
    return (
        <div className={Styles.container}>
            <aside className={Styles.aside}>
                <Nav />
                <SearchInput /> 
                <Info />
            </aside>
            <main className={Styles.main}>
                <Map />
            </main>
        </div>
    );
}

export default App;
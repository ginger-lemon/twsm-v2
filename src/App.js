import React from "react";
import './styles/global.css'
import Styles from './App.module.css'
import Nav from './components/nav/Nav'
import SearchInput from './components/SearchInput/SearchInput'
import Map from "./components/map/Map";
import Info from "./components/info/info";
import SuggestCard from "./components/SuggestCard/SuggestCard";

function App() {
    return (
        <div className={Styles.container}>
            <aside className={Styles.aside}>
                <Nav />
                <SearchInput /> 
                <SuggestCard />
                {/* <Info /> */}
            </aside>
            <main className={Styles.main}>
                <Map />
            </main>
        </div>
    );
}

export default App;
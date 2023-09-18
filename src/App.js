import React from "react";
import './styles/global.css'
import Home from "./pages/00-Home/Home";
import History from "./pages/01-History/Histoy";
import Bookmark from "./pages/02-Bookmark/Bookmark";
import Overview from "./pages/10-Overview/Overview";
import Features from "./pages/11-Features/Features";
import Utilization from "./pages/12-Utilization/Utilization";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/overview/:spicesName" element={<Overview />} />
                {/* 確認是否需要將 features 與 utilization 放到 overview 底下 */}
                <Route path="/features/:spicesName" element={<Features />} />
                <Route path="/utilization/:spicesName" element={<Utilization />} />
                {/* 木 */}
                <Route path="*" element={<h1>連線失敗，請回到首頁重新執行動作。</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
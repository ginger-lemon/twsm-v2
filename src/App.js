import React from "react";
import './styles/global.css'
import Home from "./pages/Home/Home";
import History from "./pages/History/Histoy";
import Bookmark from "./pages/Bookmark/Bookmark";
import Overview from "./pages/Overview/Overview";
import Features from "./pages/Features/Features";
import Utilization from "./pages/Utilization/Utilization";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/overview" element={<Overview />} />
                {/* 確認是否需要將 features 與 utilization 放到 overview 底下 */}
                <Route path="/features" element={<Features />} />
                <Route path="/utilization" element={<Utilization />} />
                {/* 木 */}
                <Route path="*" element={<h1>連線失敗，請回到首頁重新執行動作。</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
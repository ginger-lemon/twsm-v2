import React from "react";
import './styles/global.css'
import Home from "./pages/Home/Home";
import History from "./pages/History/Histoy";
import Bookmark from "./pages/Bookmark/Bookmark";
import Results from "./pages/Results/Results";
import Flavor from "./pages/Flavor/Flavor";
import Utilization from "./pages/Utilization/Utilization";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const App = () => {
    const { id } = useParams()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/results/:id" element={<Results />} />
                {/* 之後改巢狀路由 */}
                <Route path="/flavor/:id" element={<Flavor />} />
                <Route path="/utilization/:id" element={<Utilization />} />
                <Route path="*" element={<h1>連線失敗，請回到首頁重新執行動作。</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
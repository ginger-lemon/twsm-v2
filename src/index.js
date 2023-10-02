import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import './styles/normalizeCSS.css';
import store from './redux/store.js'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
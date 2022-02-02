import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import {Provider} from "react-redux";
import cartSlice from "./store/cartSlice";
import store from "./store";

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop/>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

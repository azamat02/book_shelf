import React from 'react';
import HomePage from "./pages/home_page";
import './styles/main.scss'
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import {Routes, Route} from "react-router-dom";
import BookPage from "./pages/book_page";
import SearchPage from "./pages/search_page";

function App() {
    return (
            <div className="App">
                <Navbar/>

                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/book/:bookId"} element={<BookPage/>}/>
                        <Route path={"/search_page"} element={<SearchPage/>}/>
                    </Routes>

                <Footer/>
            </div>
    );
}

export default App;

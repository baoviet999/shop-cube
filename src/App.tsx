import Login from 'page/Auth/components/login';
import Confirm from 'page/Confirm/Confirm';
import Detail from 'page/Detail/Detail';
import Me from 'page/Me/Me';
import SearchPage from 'page/Search/Search';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import './scss/index.scss';
function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/me" element={<Me />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;

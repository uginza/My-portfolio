import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {MainPage} from "./mainPage/MainPage";
import {Skills} from "./skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <Skills/>
        </div>
    );
}

export default App;

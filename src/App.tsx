import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {MainPage} from "./mainPage/MainPage";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myProjects/MyProjects";
import {ToHireMe} from "./ToHire/ToHireMe";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <Skills/>
            <MyProjects/>
            <ToHireMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

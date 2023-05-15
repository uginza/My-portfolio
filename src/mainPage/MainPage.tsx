import React from 'react';
import s from './MainPage.module.css';
import containerStyle from '../common/styles/containerStyle.module.css'


export function MainPage() {
    return (
        <div className={s.mainPage}>
            <div className={containerStyle.container}>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <h1>I'm Evgeniy Zakharov</h1>
                    <div>Frontend developer</div>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
}
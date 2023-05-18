import React from 'react';
import s from './MainPage.module.scss';
import containerStyle from '../common/styles/containerStyle.module.css'
import myPhoto from '../assets/images/myPhoto.jpg'


export function MainPage() {
    const myPhotoImage = {
        backgroundImage: `url(${myPhoto})`,
    };
    return (
        <div className={s.mainPage}>
            <div className={s.MainPageBlockContainer}>
                <div className={s.mainPageInfo}>
                    <h6 className={s.description}>Hi there!I'm Evgeniy Zakharov</h6>
                    <h1 className={s.mainPageTitle}>
                       Frontend developer</h1>
                </div>
                <div className={s.photo} style={myPhotoImage}></div>
            </div>

        </div>
    );
}
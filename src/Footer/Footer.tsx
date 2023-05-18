import React from 'react';
import s from './Footer.module.scss';
import containerStyle from '../common/styles/containerStyle.module.css'


export function Footer() {
    return (
        <div className={s.FooterBlock}>
            <div className={s.FooterBlockContainer}>
                <h2 className={s.text}>Evgeniy Zakharov</h2>
                <div className={s.icons}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <h3 className={s.description}>© 2023 all rights reserved</h3>
            </div>
        </div>
    );
}
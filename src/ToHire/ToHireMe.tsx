import React from 'react';
import s from './ToHireMe.module.scss';
import containerStyle from '../common/styles/containerStyle.module.css'


export function ToHireMe() {
    return (
        <div className={s.toHireBlock}>
            <div className={`${containerStyle.container} ${s.toHireBlockContainer}`}>
                <h2 className={s.text}>Remote work offers are considered</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
}
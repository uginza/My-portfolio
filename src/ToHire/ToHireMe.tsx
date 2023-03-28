import React from 'react';
import s from './ToHireMe.module.css';
import containerStyle from '../common/styles/containerStyle.module.css'


export function ToHireMe() {
    return (
        <div className={s.toHireBlock}>
            <div className={`${containerStyle.container} ${s.toHireBlockContainer}`}>
                <h2>Remote work offers is considered</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
}
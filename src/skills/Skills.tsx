import React from 'react';
import s from './Skills.module.css';
import containerStyle from '../common/styles/containerStyle.module.css'

export function Skills() {
    return (
        <div className={s.skillBlock}>
            <div className={`${containerStyle.container} ${s.skillBlockContainer}`}>
                <h2>Skills</h2>
            </div>

        </div>
    );
}
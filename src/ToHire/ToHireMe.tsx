import React from 'react';
import s from './ToHireMe.module.scss';
import containerStyle from '../common/styles/containerStyle.module.css'
import {Button} from "../common/components/button/Button";


export function ToHireMe() {
    return (
        <div className={s.toHireBlock}>
            <div className={s.toHireBlockContainer}>
                <h2 className={s.text}>Remote work offers are considered</h2>
                <div className={s.button}> <Button text={'hire!'}/></div>
            </div>
        </div>
    );
}
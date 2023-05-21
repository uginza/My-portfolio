import React from 'react';
import s from './ToHireMe.module.scss';
import containerStyle from '../common/styles/containerStyle.module.css'
import {Button} from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";


export function ToHireMe() {
    return (
        <div className={s.toHireBlock}>
            <Fade delay={500} triggerOnce>
            <div className={s.toHireBlockContainer}>
                <h2 className={s.text}>Remote work offers are considered</h2>
                <div className={s.button}> <Button buttonText={'hire!'}/></div>
            </div>
            </Fade>
        </div>
    );
}
import React from 'react';
import s from './ToHireMe.module.scss';
import {Button} from "../common/components/button/Button";
import {Zoom} from "react-awesome-reveal";


export function ToHireMe() {
    return (
        <div id='toHire' className={s.toHireBlock}>
            <Zoom delay={500} triggerOnce>
            <div className={s.toHireBlockContainer}>
                <h2 className={s.text}>Remote work offers are considered</h2>
                <div className={s.button}> <Button buttonText={'hire!'}/></div>
            </div>
            </Zoom>
        </div>
    );
}
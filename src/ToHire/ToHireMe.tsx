import React from 'react';
import s from './ToHireMe.module.scss';
import {Zoom} from "react-awesome-reveal";
import {Link} from "../common/components/LinkComponent/Link";


export function ToHireMe() {
    return (
        <div id='toHire' className={s.toHireBlock}>
            <Zoom delay={500} triggerOnce>
            <div className={s.toHireBlockContainer}>
                <h2 className={s.text}>Remote work offers are considered</h2>
                <div className={s.link}>
                    <Link href={'https://t.me/uginza'} linkText={'to hire'}/></div>
            </div>
            </Zoom>
        </div>
    );
}
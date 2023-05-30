import React from 'react';
import s from './Footer.module.scss';
import {Fade, Zoom} from "react-awesome-reveal";
import telegramIcon from '../assets/images/telegramIcon.svg'
import gitHubIcon from '../assets/images/github.svg'
import linkedInIcon from '../assets/images/linkedin.svg'
import instagramIcon from '../assets/images/instagram.svg'


export function Footer() {
    return (
        <div id='footer' className={s.FooterBlock}>
            <Zoom delay={500} triggerOnce>
            <div className={s.FooterBlockContainer}>
                <h2 className={s.text}>Evgeniy Zakharov</h2>
                <div className={s.icons}>
                    <a href="https://t.me/uginza"><img className={s.icon} src={telegramIcon} alt='telegramIcon'/></a>
                    <a href="https://github.com/uginza"><img className={s.icon} src={gitHubIcon} alt='gitHubIcon'/></a>
                    <a href="https://t.me/uginza"><img className={s.icon} src={linkedInIcon} alt='linkedInIcon'/></a>
                    <a href="https://www.instagram.com/uginza"><img className={s.icon} src={instagramIcon} alt='instagramIcon'/></a>
                </div>
                <h3 className={s.description}>© 2023 all rights reserved</h3>
            </div>
            </Zoom>
        </div>
    );
}
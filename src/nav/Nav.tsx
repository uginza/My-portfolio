import React from 'react';
import s from './Nav.module.scss';

export function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.text} href={"#projects"}>Main Page</a>
            <a className={s.text} href={"#skills"}>Skills</a>
            <a className={s.text} href={"projects"}>Projects</a>
            <a className={s.text} href="https://www.google.com/">Contacts</a>
        </div>
    );
}

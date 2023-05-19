import React from 'react';
import s from './Nav.module.scss';

export function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.text} href="">Main Page</a>
            <a className={s.text} href="">Skills</a>
            <a className={s.text} href="">Projects</a>
            <a className={s.text} href="">Contacts</a>
        </div>
    );
}

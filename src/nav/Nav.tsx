import React from 'react';
import s from './Nav.module.scss';
import {Link} from 'react-scroll'

export function Nav() {
    return (
        <div className={s.nav}>
            <Link className={s.text} activeClass={s.active} to="mainPage" spy={true} smooth={true} offset={-79}
                  duration={1500}>
                Main Page
            </Link>
            <Link className={s.text} activeClass={s.active} to="skills" spy={true} smooth={true} offset={-79}
                  duration={1500}>
                Skills
            </Link>
            <Link className={s.text} activeClass={s.active} to="projects" spy={true} smooth={true} offset={-79}
                  duration={1500}>
                Projects
            </Link>
            <Link className={s.text} activeClass={s.active} to="contacts" spy={true} smooth={true} offset={-79}
                  duration={1500}>
                Contacts
            </Link>
        </div>
    );
}

import React from 'react';
import s from './Nav.module.scss';
import {Link} from 'react-scroll'

export function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.text} href=''> Main Page</a>
            <Link className={s.text} activeClass={s.active} to="skills" spy={true} smooth={true} offset={0}
                  duration={1500}>
                Skills
            </Link>
            <Link className={s.text} activeClass={s.active} to="projects" spy={true} smooth={true} offset={0}
                  duration={1500}>
                Projects
            </Link>
            <Link className={s.text} activeClass={s.active} to="contacts" spy={true} smooth={true} offset={0}
                  duration={1500}>
                Contacts
            </Link>
        </div>
    );
}

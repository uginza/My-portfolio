import React from 'react';
import s from './Link.module.scss';

type LinkPropsType = {
    linkText: string
    href:string
}

export function Link(props: LinkPropsType) {
    return (
        <a className={s.tag } href={props.href}>{props.linkText}</a>

    );
}
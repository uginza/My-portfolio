import React from 'react';
import s from './Button.module.scss';

type ButtonPropsType = {
    buttonText: string
}

export function Button(props: ButtonPropsType) {
    return (
        <a href="" className={s.tag}>
            <span>{props.buttonText}</span>
        </a>
    );
}
import React from 'react';
import s from './Button.module.scss';

type ButtonPropsType = {
    buttonText: string
}

export function Button(props: ButtonPropsType) {
    return (
        <button className={s.tag}>{props.buttonText}</button>

    );
}
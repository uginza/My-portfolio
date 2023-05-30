import React, {MouseEventHandler} from 'react';
import s from './Button.module.scss';

type ButtonPropsType = {
    buttonText: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.onClick} className={s.tag}>{props.buttonText}</button>

    );
}
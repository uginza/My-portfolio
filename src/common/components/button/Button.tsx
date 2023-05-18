import React from 'react';
import s from './Button.module.scss';

type ButtonPropsType ={
    text:string
}

export function Button(props:ButtonPropsType) {
    return (

        <div className={s.button}>
            <span>{props.text}</span>
        </div>
    );
}
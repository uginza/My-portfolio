import React from 'react';
import s from './Button.module.scss';

type ButtonPropsType ={
    buttonText:string
}

export function Button(props:ButtonPropsType) {
    return (

        <div className={s.button}>
            <span>{props.buttonText}</span>
        </div>
    );
}
import React from 'react';
import s from './Title.module.scss';

type TitlePropsType={
    text:string
}

export function Title(props:TitlePropsType) {
    return (

        <div className={s.titleWrapper}>
            <h2 className={s.title}>{props.text}</h2>
        </div>
    );
}
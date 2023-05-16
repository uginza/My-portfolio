import React from 'react';
import s from './MyProject.module.css';

type MyProjectPropsType = {
    projectName: string
    description: string
    style:any
}

export function MyProject(props: MyProjectPropsType) {
    return (
        <div className={s.myProject}>
            <div className={s.image} style={props.style}>
                <button className={s.button}>Show me</button>
            </div>
            <div className={s.myProjectInfo}>
                <h3 className={s.myProjectTitle}>{props.projectName}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}
import React from 'react';
import s from './MyProject.module.css';

type SkillPropsType={
    projectName:string
    description:string
}

export function MyProject(props:SkillPropsType) {
    return (
            <div className={s.skill}>
                <button className={s.button}>Show me</button>
                <h3>{props.projectName}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
    );
}
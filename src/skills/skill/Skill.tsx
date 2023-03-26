import React from 'react';
import s from './Skill.module.css';

type SkillPropsType={
    skillName:string
    description:string
}

export function Skill(props:SkillPropsType) {
    return (
            <div className={s.skill}>
                <div className={s.icon}></div>
                <h3>{props.skillName}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
    );
}
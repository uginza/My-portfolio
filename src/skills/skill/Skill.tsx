import React from 'react';
import s from './Skill.module.scss';

type SkillPropsType={
    skillName:string
    description:string
    style: { backgroundImage: string }
}

export function Skill(props:SkillPropsType) {
    return (
            <div className={s.skill}>
                <div className={s.icon} style={props.style}></div>
                <div className={s.skillInfo}>
                    <h3 className={s.skillTitle}>{props.skillName}</h3>
                    <span className={s.description}>{props.description}</span>
                </div>
            </div>
    );
}
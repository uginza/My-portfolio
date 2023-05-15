import React from 'react';
import s from './Skills.module.css';
import containerStyle from '../common/styles/containerStyle.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

//1:17:33

export function Skills() {
    return (
        <div className={s.skillBlock}>
            <div className={`${containerStyle.container} ${s.skillBlockContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill skillName={"HTML /CSS"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, ipsum at aliquet varius'}/>
                    <Skill skillName={'JS /TS'} description={'At vero eos et accusamus et iusto odio dignissimos'}/>
                    <Skill skillName={'REACT /REDUX'} description={'placeat facere possimus, omnis voluptas assumenda est,'}/>
                </div>
            </div>
        </div>
    );
}
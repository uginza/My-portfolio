import React from 'react';
import s from './MyProject.module.scss';
import {Button} from "../../common/components/button/Button";

type MyProjectPropsType = {
    projectName: string
    description: string
    style: { backgroundImage: string }
}

export function MyProject(props: MyProjectPropsType) {
    return (
        <div className={s.myProject}>
            <div className={s.image} style={props.style}>
               <div className={s.button}> <Button text={'show me'}/></div>
            </div>
            <div className={s.myProjectInfo}>
                <h3 className={s.myProjectTitle}>{props.projectName}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}
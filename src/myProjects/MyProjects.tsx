import React from 'react';
import s from './MyProjects.module.css';
import containerStyle from '../common/styles/containerStyle.module.css'
import {MyProject} from "./MyProject/MyProject";

export function MyProjects() {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${containerStyle.container} ${s.myProjectsBlockContainer}`}>
                <h2>My Projects</h2>
                <div className={s.projects}>
                    <MyProject projectName={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, ipsum at aliquet varius'}/>
                    <MyProject projectName={'Todolist'} description={'At vero eos et accusamus et iusto odio dignissimos'}/>
                </div>
            </div>
        </div>
    );
}
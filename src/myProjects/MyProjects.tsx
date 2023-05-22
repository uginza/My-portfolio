import React from 'react';
import s from './MyProjects.module.scss';
import {MyProject} from "./MyProject/MyProject";
import {Title} from "../common/components/title/Title";
import todolistImg from '../assets/images/todolist.png'
import socialNetworkImg from '../assets/images/social-network.jpg'
import {Fade} from "react-awesome-reveal";

export function MyProjects() {
    const todolistImage = {
        backgroundImage: `url(${todolistImg})`,
    };
    const socialNetworkImage = {
        backgroundImage: `url(${socialNetworkImg})`,
    };
    return (
        <div className={s.myProjectsBlock}>
            <Fade delay={0} triggerOnce>
            <div className={s.myProjectsBlockContainer}>
                <Title text={'My projects'}/>
                <div className={s.projects}>
                    <MyProject style={socialNetworkImage} projectName={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, ipsum at aliquet varius'}/>
                    <MyProject style={todolistImage} projectName={'Todolist'} description={'At vero eos et accusamus et iusto odio dignissimos'}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}
import React from 'react';
import s from './MyProjects.module.scss';
import {MyProject} from "./MyProject/MyProject";
import {Title} from "../common/components/title/Title";
import todolistImg from '../assets/images/Todolist.jpg'
import socialNetworkImg from '../assets/images/social-network.jpg'
import counterImg from '../assets/images/Counter.jpg'
import {Zoom} from "react-awesome-reveal";

export function MyProjects() {
    const todolistImage = {
        backgroundImage: `url(${todolistImg})`,
    };
    const counterImage = {
        backgroundImage: `url(${counterImg})`,
        backgroundSize: '130% 300px'
    };
    const socialNetworkImage = {
        backgroundImage: `url(${socialNetworkImg})`,
    };
    return (
        <div id='projects' className={s.myProjectsBlock}>
            <Zoom delay={500} triggerOnce>
            <div className={s.myProjectsBlockContainer}>
                <Title text={'My projects'}/>
                <div className={s.projects}>
                    <MyProject style={socialNetworkImage} projectName={'Social Network'} description={'Completed project made with React and ReduxToolkit '} href={"https://uginza.github.io/samurai-way-main/"} linkText={'show me'}/>
                    <MyProject style={todolistImage} projectName={'Todolist'} description={'Completed project made with React and ReduxToolkit '} href={'https://uginza.github.io/todolist/'} linkText={'show me'} />
                    <MyProject style={counterImage} projectName={'Counter'} description={'Completed project of counter with setting parameters ability'} href={'https://uginza.github.io/Counter/'} linkText={'show me'} />
                </div>
            </div>
            </Zoom>
        </div>
    );
}
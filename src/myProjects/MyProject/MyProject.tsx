import React from 'react';
import s from './MyProject.module.scss';
import {Link} from "../../common/components/LinkComponent/Link";

type MyProjectPropsType = {
    projectName: string
    description: string
    style: { backgroundImage: string }
    href:string
    linkText:string
}

export function MyProject(props: MyProjectPropsType) {
    return (
        <div className={s.myProject}>
            <div className={s.image} style={props.style}>
               <div className={s.link}> <Link href={props.href} linkText={props.linkText}/></div>
            </div>
            <div className={s.myProjectInfo}>
                <h3 className={s.myProjectTitle}>{props.projectName}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}
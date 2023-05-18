import React from 'react';
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactIcon from "../assets/images/react2.svg";
import htmlIcon from "../assets/images/Html.svg";
import jsIcon from "../assets/images/js.svg";


export function Skills() {
    const reactImage = {
        backgroundImage: `url(${reactIcon})`,
    };
    const htmlImage = {
        backgroundImage: `url(${htmlIcon})`,
    };
    const jsImage = {
        backgroundImage: `url(${jsIcon})`,
    };
    return (
        <div className={s.skillBlock}>
            <div className={s.skillBlockContainer}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill style={htmlImage} skillName={"HTML /CSS"}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis, ipsum at aliquet varius'}/>
                    <Skill style={jsImage} skillName={'JS /TS'}
                           description={'At vero eos et accusamus et iusto odio dignissimos'}/>
                    <Skill style={reactImage} skillName={'REACT /REDUX'}
                           description={'placeat facere possimus, omnis voluptas assumenda est,'}/>
                </div>
            </div>
        </div>
    );
}
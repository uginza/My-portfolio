import React from 'react';
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactIcon from "../assets/images/react2.svg";
import htmlIcon from "../assets/images/Html.svg";
import cssIcon from "../assets/images/CSS.svg";
import reduxIcon from "../assets/images/Redux.svg";
import tsIcon from "../assets/images/TS.svg";
import formikIcon from "../assets/images/formik.svg";
import restApiIcon from "../assets/images/api.svg";
import storyBookIcon from "../assets/images/storybook-icon.svg";
import unitTestsIcon from "../assets/images/unit-tests.svg";
import jsIcon from "../assets/images/js.svg";
import {Zoom} from "react-awesome-reveal";

export function Skills() {
    const formikImage = {
        backgroundImage: `url(${formikIcon})`,
    };
    const restApiImage = {
        backgroundImage: `url(${restApiIcon})`,
    };
    const storyBookImage = {
        backgroundImage: `url(${storyBookIcon})`,
    };
    const unitTestsImage = {
        backgroundImage: `url(${unitTestsIcon})`,
    };
    const reactImage = {
        backgroundImage: `url(${reactIcon})`,
    };
    const cssImage = {
        backgroundImage: `url(${cssIcon})`,
    };
    const reduxImage = {
        backgroundImage: `url(${reduxIcon})`,
    };
    const tsImage = {
        backgroundImage: `url(${tsIcon})`,
    };
    const htmlImage = {
        backgroundImage: `url(${htmlIcon})`,
    };
    const jsImage = {
        backgroundImage: `url(${jsIcon})`,
    };
    return (
        <div id={'skills'} className={s.skillBlock}>
            <Zoom delay={500} triggerOnce>
                <div className={s.skillBlockContainer}>
                    <Title text={'Skills'}/>
                    <div className={s.skills}>
                        <Skill style={reactImage} skillName={'REACT'}
                               description={''}/>
                        <Skill style={tsImage} skillName={'TS'}
                               description={''}/>
                        <Skill style={jsImage} skillName={'JS'}
                               description={''}/>
                        <Skill style={reduxImage} skillName={'REDUX-TOOLKIT'}
                               description={''}/>
                        <Skill style={formikImage} skillName={'FORMIK'}
                               description={''}/>
                        <Skill style={restApiImage} skillName={'REST-API'}
                               description={''}/>
                        <Skill style={storyBookImage} skillName={'STORY BOOK'}
                               description={''}/>
                        <Skill style={unitTestsImage} skillName={'UNIT TESTS'}
                               description={''}/>
                        <Skill style={htmlImage} skillName={'HTML'}
                               description={''}/>
                        <Skill style={cssImage} skillName={"CSS"}
                               description={''}/>
                    </div>
                </div>
            </Zoom>
        </div>
    );
}
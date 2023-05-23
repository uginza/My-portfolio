import React from 'react';
import s from './Contacts.module.scss';
import {Button} from "../common/components/button/Button";
import {Title} from "../common/components/title/Title";
import {Fade, Zoom} from "react-awesome-reveal";


export function Contacts() {
    return (
        <div id='contacts' className={s.ContactsBlock}>
            <Zoom delay={500} triggerOnce>
            <div className={s.ContactsBlockContainer}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input type='text' className={s.formArea}/>
                    <input type='text' className={s.formArea}/>
                    <textarea className={s.textArea}>
                    </textarea>
                    <div className={s.button}><Button buttonText={'to write!'}/></div>
                </form>
            </div>
            </Zoom>
        </div>
    );
}
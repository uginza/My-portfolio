import React from 'react';
import s from './Contacts.module.scss';
import {Button} from "../common/components/button/Button";
import {Title} from "../common/components/title/Title";


export function Contacts() {
    return (
        <div className={s.ContactsBlock}>
            <div className={s.ContactsBlockContainer}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea>
                    </textarea>
                </form>
                <div className={s.button}> <Button buttonText={'to write!'}/></div>
            </div>
        </div>
    );
}
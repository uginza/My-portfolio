import React from 'react';
import s from './Contacts.module.scss';
import containerStyle from '../common/styles/containerStyle.module.css'


export function Contacts() {
    return (
        <div className={s.toHireBlock}>
            <div className={`${containerStyle.container} ${s.toHireBlockBlockContainer}`}>
                <h2 className={s.text}>Contacts</h2>
                <form className={s.form}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea>
                    </textarea>
                </form>
                <button type='submit'>Send</button>
            </div>
        </div>
    );
}
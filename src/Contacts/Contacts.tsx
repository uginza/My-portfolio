import React from 'react';
import s from './Contacts.module.css';
import containerStyle from '../common/styles/containerStyle.module.css'


export function Contacts() {
    return (
        <div className={s.toHireBlock}>
            <div className={`${containerStyle.container} ${s.toHireBlockBlockContainer}`}>
                <h2>Contacts</h2>
                <form className={s.form}>
                    <input/>
                    <input/>
                    <textarea>
                    </textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}
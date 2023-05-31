import React from 'react';
import s from './Contacts.module.scss';
import {Button} from "../common/components/button/Button";
import {Title} from "../common/components/title/Title";
import {Zoom} from "react-awesome-reveal";
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    firstName?: string
    comment?: string
}

export function Contacts() {

    const formik = useFormik({
        validate (values) {
            const errors: FormikErrorType = {}
            if (!values.firstName) {
                errors.firstName = 'Required';
            } else if (values.firstName.length > 15) {
                errors.firstName = 'Must be 15 characters or less';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.comment) {
                errors.comment = 'Required';
            }

            return errors;
        },
        initialValues: {
            email: '',
            firstName: '',
            comment:''

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div id='contacts' className={s.ContactsBlock}>
            <Zoom delay={500} triggerOnce>
                <div className={s.ContactsBlockContainer}>
                    <Title text={'Contacts'}/>
                    <form
                        className={s.form}
                        onSubmit={formik.handleSubmit}>
                        <label htmlFor="email">Email Address</label>
                        {formik.touched.email && formik.errors.email ? <div className={s.error}>{formik.errors.email}</div> : null}
                        <input
                            className={s.formArea}
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                        <label htmlFor="firstName">First Name</label>
                        {formik.touched.firstName && formik.errors.firstName ? <div className={s.error}>{formik.errors.firstName}</div> : null}
                        <input
                            className={s.formArea}
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />

                        <label htmlFor="comment">Comment</label>
                        {formik.touched.comment && formik.errors.comment ? <div className={s.error}>{formik.errors.comment}</div> : null}
                        <textarea
                            className={s.textArea}
                            id="comment"
                            name="comment"
                            onChange={formik.handleChange}
                            value={formik.values.comment}
                        />
                        <div className={s.link}>
                            <Button buttonText={'to write!'}/>
                        </div>
                    </form>
                </div>
            </Zoom>
        </div>
    );
}
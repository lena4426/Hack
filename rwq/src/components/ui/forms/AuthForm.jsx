import React from 'react';
import classes from "./AuthForm.module.css";

const AuthForm = ({title}) => {
    return (
        <form className={classes.AuthForm}>
            <div className={classes.AuthForm__header}>{title}</div>

            <div className={classes.AuthForm__inputs}>
                <input className={classes.AuthFormInput} placeholder="Почта/Логин" type="text"/>
                <input className={classes.AuthFormInput} placeholder="Пароль" type="text"/>
            </div>

            <div className={classes.AuthForm__buttons}>
                <button type="submit" className={classes.button_submit}>Войти</button>
                <a className={classes.urlButton} href="">Зарегистрироваться</a>
            </div>
        </form>
    );
};

export default AuthForm;
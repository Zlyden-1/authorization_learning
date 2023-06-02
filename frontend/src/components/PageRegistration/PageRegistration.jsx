import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './PageRegistration.module.scss'
import axios from "axios";
import validator from 'validator';

export const PageRegistration = () => {
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            enterpassword: ""
        }
    })
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
    const submitChackin = event => {
        event.preventDefault();
        if (!validator.isEmail(register.email)) {
            alert("Вы не ввели email!")
        } else if (register.password !== register.enterpassword) {
            alert("Повторный пароль не соответствует текущему!")
        } else if (!validator.isStrongPassword(register.password, { minSymbols: 0 })) {
            alert("Пароль должен состоять из одной строчной, заглавной буквы и цифры, не менее 8 символов.")
        } else {
            axios.post("http://95.163.240.234:8000/rgstr_user/", {
                username: register.username,
                email: register.email,
                password: register.password,
            }).then(res => {
                if (res.data === true) {
                    window.location.href = "/auth"
                } else {
                    alert("There is already a user with this email")
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.wrapperhead}>
                <NavLink to='/reg' style={{ backgroundColor: '#D24C00' }}>Регистрация исполнителя</NavLink>
                <NavLink to='/auth'>Вход</NavLink>
            </div>
            <form className={s.form} onSubmit={submitChackin}>
                <input className={s.component}
                placeholder="Логин"
                    type="username"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={changeInputRegister}
                />
                <input className={s.component}
                placeholder="Электронная почта"
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={changeInputRegister}
                    formnovalidate
                />
                <input className={s.component}
                placeholder="Пароль"
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputRegister}
                />
                <input className={s.component}
                placeholder="Повторите пароль"
                    type="password"
                    id="enterpassword"
                    name="enterpassword"
                    value={register.enterpassword}
                    onChange={changeInputRegister}
                />
                <input style={{ marginTop: '20px' }} className={s.component} type="submit" />
            </form>
        </div>
    )

}
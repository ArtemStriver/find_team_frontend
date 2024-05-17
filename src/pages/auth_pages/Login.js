import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {login} from "../../http/userAPI";
import {HOME_ROUTE, PROFILE_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import "./auth.css"


const LoginForm = observer(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user} = useContext(Context);
    const navigate = useNavigate()

    const signIn = async () => {
        try {
            const response = await login(email, password)
            console.log("OK")
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('rstoken', response.data.refresh_token)
            user.setUser(response.data.user)
            user.setIsAuth(true)
            navigate(HOME_ROUTE)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="login_form_page">
            <p>ВОЙТИ В АККАУНТ</p>
            <form className="some-form">
                <input
                    className="some-input"
                    required="required"
                    id="login_email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email или name"/>
                <input
                    className="some-input"
                    required="required"
                    id="passwoed"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    autoComplete="on"
                    type="password"
                    maxLength={30}
                    placeholder="Пароль"/>
                <button type="button" className="login_form_button" onClick={signIn}>Логин</button>
            </form>
            <a className="login_form_register-link" href="/register">Регистрация</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="login_form_change-password-link" href={PROFILE_ROUTE + "/recover_password"}>Забыли пароль?</a>
        </div>
    );
});

export default LoginForm;
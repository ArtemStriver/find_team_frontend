import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {register} from "../../http/userAPI";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";
import "./auth.css"


const RegisterForm = observer(() => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [hashed_password, setHashedPassword] = useState("");
    const [confirmed_password, setConfirmedPassword] = useState("");
    const navigate = useNavigate()

    const signUp = async () => {
        try {
            await register(username, email, hashed_password, confirmed_password)
            alert("Вам на почту отправлено письмо с ссылкой, перейдите по ней для подтверждения аккаунта.")
            navigate(HOME_ROUTE)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className="login_form_page">
            <p className="register_form_title">РЕГИСТРАЦИЯ</p>
            <form className="some-form">
                <input
                    className="some-input"
                    required="required"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    maxLength="14"
                    placeholder="Name"/>
                <input
                    className="some-input"
                    required="required"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"/>
                <input
                    className="some-input"
                    required="required"
                    id="hashed_password"
                    onChange={e => setHashedPassword(e.target.value)}
                    value={hashed_password}
                    autoComplete="on"
                    type="password"
                    maxLength={30}
                    placeholder="Пароль"/>
                <input
                    className="some-input"
                    required="required"
                    id="confirmed_password"
                    onChange={e => setConfirmedPassword(e.target.value)}
                    value={confirmed_password}
                    autoComplete="on"
                    type="password"
                    maxLength={30}
                    placeholder="Повторите пароль"/>
                <button type="button" className="login_form_button" onClick={signUp}>Регистрация</button>
            </form>
            <a className="login_form_register-link" href="/login">Логин</a>
        </div>
    );
});

export default RegisterForm;
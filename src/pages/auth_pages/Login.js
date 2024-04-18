import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {login} from "../../http/userAPI";
import {HOME_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";


const LoginForm = observer(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user} = useContext(Context);
    const navigate = useNavigate()

    const signIn = async () => {
        try {
            const response = await login(email, password)
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
        <>
            <div className="form-page">
                <h2>Войти в аккаунт</h2>
                <form className="some-form">
                    <input
                        className="some-input"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder="Email"/>
                    <input
                        className="some-input"
                        id="passwoed"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        autoComplete="on"
                        type="password"
                        placeholder="Password"/>
                </form>
                <br/>
                <button className="login-button" type="button" onClick={signIn}>Логин</button>
                <br/>
                <a href="/register">Регистрация</a>
            </div>
        </>
    );
});

export default LoginForm;
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";
import {reset_password} from "../../http/userAPI";

const RecoverPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const resetPassword = async () => {
        try {
            await reset_password(email)
            alert("Вам на почту отправлено письмо с ссылкой, перейдите по ней для сброса пароля.")
            navigate(HOME_ROUTE)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className="login_form_page">
            <p>СБРОС ПАРОЛЯ</p>
            <form className="some-form">
                <input
                    className="some-input"
                    required="required"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Введите ваш email"/>
                <button type="button" className="login_form_button" onClick={resetPassword}>Сбросить пароль</button>
            </form>
            <a className="login_form_register-link" href="/login">Логин</a>
        </div>
    );
};

export default RecoverPassword;
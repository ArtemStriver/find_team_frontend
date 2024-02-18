import React, {Component, useState} from 'react';

class Auth extends Component {
    render() {
        // const [email, setEmail] = useState("");

        return (
            <>
            <div>
                <form className="login">
                    <h2>Войти в аккаунт</h2>
                    <input type="text" className="form-control" name='username' placeholder="Username"/><br/>
                    <input type="password" className="form-control" name='password' placeholder="Password"/><br/><br/>
                    <button type="submit" className="btn btn-success">Войти</button>
                    <br/><br/>
                    <a href="">Забыли пароль?</a> или <a
                    href="/register">Регистрация</a>
                </form>
            </div>
            </>
        );
    }
}

export default Auth;
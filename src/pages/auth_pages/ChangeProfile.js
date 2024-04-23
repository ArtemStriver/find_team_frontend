import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, PROFILE_ROUTE, TEAM_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {changeTeam, deleteTeam} from "../../http/teamAPI";

const ChangeProfile = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [username, setUsername] = useState(user?.profile.username);

    const changeThisProfile = async () => {
        try {
            // await changeProfile();
            navigate(PROFILE_ROUTE + "/" + user.profile.user_id)
        } catch (e) {
            console.log(e)
        }
    }
    const deleteThisProfile = async () => {
        try {
            // await deleteProfile();
            navigate(HOME_ROUTE)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="form-page">
            <h1>Изменить свой профиль</h1>
            <form className="some-form">
                <input
                    className="some-input"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"/>
                <br/><br/>
                <button className="login-button" type="button" onClick={changeThisProfile}>Изменить профиль</button>
                <br/><br/>
            </form>
            <button
                className="delete_team-button"
                onClick={() => deleteThisProfile()}>
                Удалить аккаунт
            </button>
        </div>
    );
};

export default ChangeProfile;
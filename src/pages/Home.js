import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {CREATE_TEAM_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";

const Home = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    return (
        <>
            <div className="home-page">
                <h1>Hello Home</h1><br/>
                <div>
                    {!user.isAuth ?
                        <button className="create-team-button" onClick={() => navigate(LOGIN_ROUTE)}>
                            Create Team
                        </button>
                        :
                        <button className="create-team-button" onClick={() => navigate(CREATE_TEAM_ROUTE)}>
                            Create Team
                        </button>
                    }
                </div>
            </div>
        </>
    );
});

export default Home;
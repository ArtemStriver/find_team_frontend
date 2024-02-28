import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, TEAM_ROUTE} from "../utils/consts";
import {Context} from "../index";

const TeamItem = ({team}) => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className="team_item_card" onClick={() =>
            {user.isAuth ?
                navigate(TEAM_ROUTE + "/" + team.id)
                :
                navigate(LOGIN_ROUTE)
            }
        }>
            <div className="team_item-title">{team.title}</div>
            <div className="team_item-description">{team.description}</div>
            <div className="team_item-type">#направление_команды</div>
        </div>
    );
};

export default TeamItem;
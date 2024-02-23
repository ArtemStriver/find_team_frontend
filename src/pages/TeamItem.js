import React from 'react';
import {useNavigate} from "react-router-dom";
import {TEAM_ROUTE} from "../utils/consts";

const TeamItem = ({team}) => {
    const navigate = useNavigate()

    return (
        <div className="team_item_card" onClick={() => navigate(TEAM_ROUTE + "/" + team.id)}>
            <div className="team_item-title">{team.title}</div>
            <div className="team_item-description">{team.description}</div>
            <div className="team_item-type">#направление_команды</div>
        </div>
    );
};

export default TeamItem;
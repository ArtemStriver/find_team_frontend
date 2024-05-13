import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import "../team.css"

const TeamOwnerData = (data) => {
    const team_data = data.data;

    return (
        <div className="team_owner_data">
            <div className="team_image"> </div>
            <div className="owner_name" >
                <p className="owner_name-annotation">Создано:</p>
                <a className="owner_name-link" href={PROFILE_ROUTE + "/" + team_data.owner}>@{team_data.owner_name}</a>
            </div>
        </div>
    );
};

export default TeamOwnerData;
import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";

const TeamOwnerData = (data) => {
    const team_data = data.data;

    return (
        <div className="team_owner_data">
            <div className="team_image"></div>
            <a className="owner_name" href={PROFILE_ROUTE + "/" + team_data.owner}>{team_data.owner_name}</a>
        </div>
    );
};

export default TeamOwnerData;
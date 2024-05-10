import React from 'react';
import "../team.css"

const TeamNumberOfMembers = (data) => {
    const team_data = data.data;


    return (
        <div>
            <p>Идут</p>
            {team_data?.members?.length} / {team_data?.number_of_members}
        </div>
    );
};

export default TeamNumberOfMembers;
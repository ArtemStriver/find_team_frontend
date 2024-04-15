import React from 'react';
import TeamItem from "../../team_pages/TeamItem";

const ProfileTeamsIAmOn = (team) => {
    return (
        <div className="profile-teams">
            <h2>The teams I participate in</h2>
            <div className="team_list">
                {team.team.myTeamsParticipation.map(team =>
                    <TeamItem key={team.id} team={team}/>
                )}
            </div>
        </div>
    );
};

export default ProfileTeamsIAmOn;
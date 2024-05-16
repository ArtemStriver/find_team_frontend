import React from 'react';
import TeamItem from "../../team_pages/TeamItem";
import "../auth.css"

const ProfileTeamsIAmOn = (team) => {
    return (
        <div className="profile-teams">
            <div className="profile-teams_title">
                <p>Состою в файнах:</p>
                <div className="profile-teams_title_count">{team.team.myTeamsParticipation.length}</div>
            </div>
            <div className="team_list">
                {team.team.myTeamsParticipation.map(team =>
                    <TeamItem key={team.id} team={team}/>
                )}
            </div>
        </div>
    );
};

export default ProfileTeamsIAmOn;
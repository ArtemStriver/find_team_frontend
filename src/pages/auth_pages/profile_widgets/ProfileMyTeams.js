import React from 'react';
import TeamItem from "../../team_pages/TeamItem";
import "../auth.css"

const ProfileMyTeams = (team) => {
    return (
        <div className="profile-my_teams">
            <div className="profile-teams_title">
                <p>Мои файны:</p>
                <div className="profile-teams_title_count">{team.team.myTeams.length}</div>
            </div>
            <div className="team_list">
                {team.team.myTeams.map(team =>
                    <TeamItem key={team.id} team={team}/>
                )}
            </div>
        </div>
    );
};

export default ProfileMyTeams;
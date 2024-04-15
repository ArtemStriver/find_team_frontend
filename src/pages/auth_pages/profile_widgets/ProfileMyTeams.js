import React from 'react';
import TeamItem from "../../team_pages/TeamItem";

const ProfileMyTeams = (team) => {
    return (
        <div className="profile-my_teams">
            <h2>My teams</h2>
            <div className="team_list">
                {team.team.myTeams.map(team =>
                    <TeamItem key={team.id} team={team}/>
                )}
            </div>
        </div>
    );
};

export default ProfileMyTeams;
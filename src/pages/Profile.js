import React, {useContext} from 'react';
import {Context} from "../index";
import TeamItem from "./TeamItem";

const Profile = () => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)

    return (
        <div className="profile-page">
            <div className="image+name+contacts+description+hobbies">{user.user.username}</div>
            <div className="profile-teams">
                <h2>The teams I participate in</h2>
                <div className="team_list">
                    {team.myTeamsParticipation.map(team =>
                        <TeamItem key={team.id} team={team}/>
                    )}
                </div>
            </div>
            <div className="profile-my_teams">
                <h2>My teams</h2>
                <div className="team_list">
                    {team.myTeams.map(team =>
                        <TeamItem key={team.id} team={team}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
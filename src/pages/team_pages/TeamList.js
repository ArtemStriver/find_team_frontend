import React from 'react';
import {observer} from "mobx-react-lite";
import TeamItem from "./TeamItem";
import "./team.css"

const TeamList = observer((data) => {
    const team_data = data.data;

    return (
        <div className="team_list">
            {team_data.map(team =>
                <TeamItem key={team.id} team={team}/>
            )}
        </div>
    );
});

export default TeamList;
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import TeamItem from "./TeamItem";

const TeamList = observer(() => {
    const {team} = useContext(Context)

    return (
        <div className="team_list">
            {team.teams.map(team =>
                <TeamItem key={team.id} team={team}/>
            )}
        </div>
    );
});

export default TeamList;
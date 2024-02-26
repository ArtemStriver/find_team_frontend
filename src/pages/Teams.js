import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import TeamList from "./TeamList";
import {Context} from "../index";
import {getTeams} from "../http/teamAPI";


const Teams = observer(() => {
    const {team} = useContext(Context)

    useEffect(() => {
        getTeams().then(data => team.setTeams(data))
    }, [])

    // console.log(team.teams)

    return (
        <>
        <div className="teams_page">
            <h1>All Teams</h1>
            <TeamList/>
        </div>
        </>
    );
});

export default Teams;
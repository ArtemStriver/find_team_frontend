import React from 'react';
import {observer} from "mobx-react-lite";
import TeamList from "./TeamList";


const Teams = observer(() => {
    return (
        <>
        <div>
            <h1>All Teams</h1>
            <TeamList/>
        </div>
        </>
    );
});

export default Teams;
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {useParams} from "react-router-dom"
import {getApplicationList, getMembersList, getOneTeams} from "../../http/teamAPI";
import TeamData from "./team_widgets/TeamData";
import TeamOwnerData from "./team_widgets/TeamOwnerData";
import TeamMembers from "./team_widgets/TeamMembers";
import TeamActions from "./team_widgets/TeamActions";
import TeamApplications from "./team_widgets/TeamApplications";
import TeamNumberOfMembers from "./team_widgets/TeamNumberOfMembers";
import "./team.css"

const TeamPage = () => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)
    const [team_full_data, setTeamFullData] = useState([])
    const [application_list, setApplicationList] = useState([])
    const [members_list, setMembersList] = useState([])
    const {id} = useParams()

    const members = [];
    for(const k in members_list) {
        const v = members_list[k];
        members.push(v.user_id);
    }

    useEffect(() => {
        getOneTeams(id).then(data => setTeamFullData(data.data))
    }, []);

    useEffect(() => {
        getApplicationList(id).then(data => setApplicationList(data))
    }, [])

    useEffect(() => {
        getMembersList(id).then(data => setMembersList(data))
    }, [])

    team.setTeamNow(team_full_data)

    return (
        <div className="team_page">
            <TeamOwnerData data={team_full_data}/>
            <TeamData data={team_full_data}/>
            <div className='team_data_and_actions'>
                <TeamNumberOfMembers data={team_full_data}/>
                {user?.user.id === team_full_data?.owner ?
                    <div>
                        <TeamMembers u_data={user} t_data={team_full_data} m_data={members_list}/>
                        <TeamApplications t_data={team_full_data} a_data={application_list}/>
                    </div>
                    :
                    members?.includes(user?.user.id) ?
                        <div>
                            <TeamMembers u_data={user} t_data={team_full_data} m_data={members_list}/>
                        </div>
                        :
                        <div></div>
                }
                <TeamActions u_data={user} t_data={team_full_data}/>
            </div>
        </div>

    );
};

export default TeamPage;
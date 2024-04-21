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

const TeamPage = () => {
    const {user} = useContext(Context)
    const [team_full_data, setTeamFullData] = useState([])
    const [application_list, setApplicationList] = useState([])
    const [members_list, setMembersList] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getOneTeams(id).then(data => setTeamFullData(data.data))
    }, []);

    useEffect(() => {
        getApplicationList(id).then(data => setApplicationList(data))
    }, [])

    useEffect(() => {
        getMembersList(id).then(data => setMembersList(data))
    }, [])

    return (
        <div className="team_page">
            <TeamOwnerData data={team_full_data}/>
            <TeamData data={team_full_data}/>
            <div>
                <TeamNumberOfMembers data={team_full_data}/>
                {/*TODO сделать условие отображения списка участников и заявок в зависимости от статуса пользователя*/}
                <TeamMembers u_data={user} t_data={team_full_data} m_data={members_list}/>
                <TeamApplications data={application_list}/>
                {/*TODO сделать условие отображения разных кнопок в зависимости от статуса пользователя здесь а не в TeamAction*/}
                <TeamActions u_data={user} t_data={team_full_data}/>
            </div>
        </div>

    );
};

export default TeamPage;
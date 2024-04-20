import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {useParams} from "react-router-dom"
import {getApplicationList, getMembersList, getOneTeams} from "../../http/teamAPI";
import TeamData from "./team_widgets/TeamData";
import TeamOwnerData from "./team_widgets/TeamOwnerData";
import TeamMembers from "./team_widgets/TeamMembers";
import TeamActions from "./team_widgets/TeamActions";
import TeamApplications from "./team_widgets/TeamApplications";

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
        if (user._user.id === team_full_data.owner) {
            getApplicationList(id).then(data => setApplicationList(data))
        }
    }, [])

    useEffect(() => {
        if (user._user.id === team_full_data.owner) {
            getMembersList(id).then(data => setMembersList(data))
        }
    }, [])

    return (
        <div className="team_page">
            <TeamOwnerData data={team_full_data}/>
            <TeamData data={team_full_data}/>
            <div>
                {/*TODO сделать условие отображения списка участников и заявок в зависимости от статуса пользователя*/}
                <TeamMembers data={members_list}/>
                <TeamApplications data={application_list}/>
                {/*TODO сделать условие отображения разных кнопок в зависимости от статуса пользователя здесь а не в TeamAction*/}
                <TeamActions user_data={user} team_data={team_full_data}/>
            </div>
        </div>

    );
};

export default TeamPage;
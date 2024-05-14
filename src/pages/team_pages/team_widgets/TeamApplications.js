import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import {rejectComrade, takeComrade} from "../../../http/teamActionAPI";
import "../team.css"

const TeamApplications = (data) => {
    const applications_data = data.a_data;
    const team_data = data.t_data;
    const [active, setActive] = React.useState(false);

    const takeUserInTeam = async (comrade_id, team_id) => {
        try {
            await takeComrade(comrade_id, team_id);
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }
    const rejectApplicationOfUser = async (comrade_id, team_id) => {
        try {
            await rejectComrade(comrade_id, team_id);
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='team_members'>
            <a className={
                team_data?.type_team === 'work' ?
                    "team_members_preview_w"
                    :
                    team_data?.type_team === 'lifestyle' ?
                        "team_members_preview_l"
                        :
                        team_data?.type_team === 'sport' ?
                            "team_members_preview_s"
                            :
                            'team_members_preview'
            } href="#"  onClick={() => setActive(!active)}>Список заявок</a>
            <div className={
                active ?
                    "team_members_list_view"
                    :
                    "team_members_list_def"
            }>
                {applications_data?.map(
                    application => <div key={application.user_id}>
                        <a className="team_members_link" href={PROFILE_ROUTE + "/" + application.user_id}>
                            {application.cover_letter}
                        </a>
                        <button
                            className="team_applications_button_take"
                            type="submit"
                            onClick={() =>
                                takeUserInTeam(application.user_id, application.team_id)}>
                            Принять
                        </button>
                        <button
                            className="team_applications_button_reject"
                            type="submit"
                            onClick={() =>
                                rejectApplicationOfUser(application.user_id, application.team_id)}>
                            Отклонить
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamApplications;
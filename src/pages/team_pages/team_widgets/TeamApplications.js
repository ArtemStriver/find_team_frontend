import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import {rejectComrade, takeComrade} from "../../../http/teamActionAPI";

const TeamApplications = (data) => {
    const applications_data = data.data;

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
        <div>
            <h4>Список заявок</h4>
            {applications_data?.map(
                application => <div key={application.user_id}>
                    <a href={PROFILE_ROUTE + "/" + application.user_id}>{application.cover_letter}</a>
                    <button
                        type="submit"
                        onClick={() =>
                            takeUserInTeam(application.user_id, application.team_id)}>
                        Принять
                    </button>
                    <button
                        type="submit"
                        onClick={() =>
                            rejectApplicationOfUser(application.user_id, application.team_id)}>
                        Отклонить
                    </button>
                </div>
            )}
        </div>
    );
};

export default TeamApplications;
import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";

const TeamApplications = (data) => {
    const applications_data = data.data;

    return (
        <div>
            {/*TODO Сделать тексты заявки ссылками на профили*/}
            {applications_data?.map(
                application => <div key={application.user_id}>
                    <a href={PROFILE_ROUTE + "/" + application.user_id}>{application.cover_letter}</a>
                    <button>Принять</button><button>Отклонить</button>
                </div>
            )}
        </div>
    );
};

export default TeamApplications;
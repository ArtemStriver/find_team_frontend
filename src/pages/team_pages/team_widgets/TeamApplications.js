import React from 'react';

const TeamApplications = (data) => {
    const applications_data = data.data;

    return (
        <div>
            {applications_data?.map(
                application => <div key={application.user_id}>
                    <p>{application.user_id} {application.cover_letter}</p>
                    <button>Принять</button><button>Отклонить</button>
                </div>
            )}
        </div>
    );
};

export default TeamApplications;
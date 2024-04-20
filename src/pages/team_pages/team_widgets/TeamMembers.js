import React from 'react';

const TeamMembers = (data) => {
    const members_data = data.data;

    return (
        <div className="team_members">
            {/*<div className="team_members-title">Надо {team_full_data.number_of_members} участников</div>*/}
            {/*/!*TODO разобраться почему в _user не записывается инфа о ползователе, хотя он передается вместе с токенами*!/*/}
            {/*{user._user && user._user.id === team_full_data.owner ?*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            {team_full_data.members?.map(*/}
            {/*                member => <p key={member.id}>{member.username}</p>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        /!*TODO надо с сервера дергать за ручку и получать список заявок*!/*/}
            {/*        <div>*/}
            {/*            Application list*/}
            {/*            {application_list?.map(*/}
            {/*                application => <p key={application.id}>{application.cover_letter}</p>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    :*/}
            {/*    <div>*/}
            {/*        {team_full_data.members?.map(*/}
            {/*            member => <p key={member.id}>{member.username}</p>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*}*/}
        </div>
    );
};

export default TeamMembers;
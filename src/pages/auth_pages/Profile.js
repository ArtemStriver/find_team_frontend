import React, {useContext} from 'react';
import {Context} from "../../index";
import ProfileImage from "./profile_widgets/ProfileImage";
import ProfileData from "./profile_widgets/ProfileData";
import ProfileHobbies from "./profile_widgets/ProfileHobbies";
import ProfileMyTeams from "./profile_widgets/ProfileMyTeams";
import ProfileTeamsIAmOn from "./profile_widgets/ProfileTeamsIAmOn";

const Profile = () => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)

    // TODO надо получить данные профиля, отправив запрос

    return (
        <div className="profile-page">
            <ProfileImage data={user.user}/>
            <ProfileData data={user.user}/>
            <ProfileHobbies data={user.user}/>
            {/*TODO отображать эти блоки если user.id == profile_data.user_id*/}
            <ProfileMyTeams team={team}/>
            <ProfileTeamsIAmOn team={team}/>
        </div>
    );
};

export default Profile;
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import ProfileImage from "./profile_widgets/ProfileImage";
import ProfileData from "./profile_widgets/ProfileData";
import ProfileHobbies from "./profile_widgets/ProfileHobbies";
import ProfileMyTeams from "./profile_widgets/ProfileMyTeams";
import ProfileTeamsIAmOn from "./profile_widgets/ProfileTeamsIAmOn";
import {getProfileData} from "../../http/userAPI";


const Profile = () => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)
    const [profile_data, setProfileData] = useState([])
    const userProfileId = window.location.href.split("/")[4]

    useEffect(() => {
        getProfileData(userProfileId).then(data => setProfileData(data))
    }, [user])

    return (
        <div className="profile-page">
            <ProfileImage data={profile_data}/>
            <ProfileData data={profile_data}/>
            <ProfileHobbies data={profile_data}/>
            {user.user.id === userProfileId ?
                <div>
                    <ProfileMyTeams team={team}/>
                    <ProfileTeamsIAmOn team={team}/>
                </div>
                :
                <div>Null</div>
            }

        </div>
    );
};

export default Profile;
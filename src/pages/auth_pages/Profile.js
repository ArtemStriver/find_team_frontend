import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import ProfileImage from "./profile_widgets/ProfileImage";
import ProfileData from "./profile_widgets/ProfileData";
import ProfileHobbies from "./profile_widgets/ProfileHobbies";
import ProfileMyTeams from "./profile_widgets/ProfileMyTeams";
import ProfileTeamsIAmOn from "./profile_widgets/ProfileTeamsIAmOn";
import {getProfileData} from "../../http/userAPI";
import {getMyTeams, getTeamsMyParticipation} from "../../http/teamAPI";
// import {useParams} from "react-router-dom";


const Profile = () => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)
    const [profile_data, setProfileData] = useState([])
    const userProfileId = window.location.href.split("/")[4]
    // TODO выямнить почему не могу получить id через useParams
    // const {id} = useParams()
    // console.log(id, userProfileId)

    useEffect(() => {
        getMyTeams().then(data => team.setMyTeams(data))
    }, [])

    useEffect(() => {
        getTeamsMyParticipation().then(data => team.setMyTeamsParticipation(data))
    }, [])

    useEffect(() => {
        getProfileData(userProfileId).then(data => setProfileData(data))
    }, [user])
    user.setProfile(profile_data)

    return (
        <div className="profile-page">
            {/*TODO добавить кнопку изменения данных профиля и удаление профиля*/}
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
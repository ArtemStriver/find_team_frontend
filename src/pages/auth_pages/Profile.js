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
import "./auth.css"
import {useParams} from "react-router-dom";


const Profile = () => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)
    const [profile_data, setProfileData] = useState([])
    const userProfileId = useParams().id

    useEffect(() => {
        getMyTeams().then(data => team.setMyTeams(data))
    }, [team])

    useEffect(() => {
        getTeamsMyParticipation().then(data => team.setMyTeamsParticipation(data))
    }, [team])

    useEffect(() => {
        getProfileData(userProfileId).then(data => setProfileData(data))
    }, [user, userProfileId])

    useEffect(() => {
        user.setProfile(profile_data)
    }, [profile_data, user])

    return (
        <div className="profile-page">
            <ProfileImage />
            <ProfileData data={profile_data}/>
            <ProfileHobbies data={profile_data}/>
            {user.user.id === userProfileId ?
                <div>
                    <ProfileMyTeams team={team}/>
                    <ProfileTeamsIAmOn team={team}/>
                </div>
                :
                <div></div>
            }
        </div>
    );
};

export default Profile;
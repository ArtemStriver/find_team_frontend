import React from 'react';
import "../auth.css"

const ProfileHobbies = (data) => {
    const user_hobbies = data.data.hobbies;

    return (
        <div className="profile_hobbies">
            <p>Увлечения:</p>
            <div className={
                user_hobbies?.lifestyle1 ?
                    "profile_hobby_l"
                    :
                    "profile_hobby_l_def"
            }>{user_hobbies?.lifestyle1}</div>
            <div className={
                user_hobbies?.sport1 ?
                    "profile_hobby_s"
                    :
                    "profile_hobby_s_def"
            }>{user_hobbies?.sport1}</div>
            <div className={
                user_hobbies?.work1 ?
                    "profile_hobby_w"
                    :
                    "profile_hobby_w_def"
            }>{user_hobbies?.work1}</div>
        </div>
    );
};

export default ProfileHobbies;
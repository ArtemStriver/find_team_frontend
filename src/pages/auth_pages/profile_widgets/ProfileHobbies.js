import React from 'react';

const ProfileHobbies = (data) => {
    const user_hobbies = data.data.hobbies;

    return (
        <div>
            <p>Увлечения:</p>
            {user_hobbies?.lifestyle1}
            {user_hobbies?.lifestyle2}
            {user_hobbies?.lifestyle3}
            {user_hobbies?.sport1}
            {user_hobbies?.sport2}
            {user_hobbies?.sport3}
            {user_hobbies?.work1}
            {user_hobbies?.work2}
            {user_hobbies?.work3}
        </div>
    );
};

export default ProfileHobbies;
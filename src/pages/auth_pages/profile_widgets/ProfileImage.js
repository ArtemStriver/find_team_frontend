import React from 'react';

const ProfileImage = (data) => {
    const user_data = data.data;

    return (
        <div>
            *дефолтная картинка*
            {user_data.image_path}
        </div>
    );
};

export default ProfileImage;
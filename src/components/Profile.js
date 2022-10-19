import React from 'react';
import { useAuth } from '../contexts/UserContext';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className='min-h-screen flex justify-center'>
            {user.displayName}
        </div>
    );
};

export default Profile;
import React from 'react';
import { useAuth } from '../contexts/UserContext';
import { FaEnvelope } from 'react-icons/fa';

const Profile = () => {
    const { user } = useAuth();
    console.log(user);
    const { uid, displayName, photoURL, email, emailVerified } = user;
    return (
        <div className='min-h-screen flex justify-center'>
            <div className='bg-slate-800 h-fit flex items-center gap-5 py-5 px-6 rounded-md'>
                <div className='relative w-20'>
                    {
                        photoURL ?
                            <img className='rounded-full' src={photoURL} alt="" />
                            :
                            <div className='bg-slate-900 w-20 h-20 rounded-full'></div>
                    }
                    <div className='h-4 w-4 rounded-full bg-green-500 absolute bottom-0 right-0 -translate-x-1/2'></div>
                </div>
                <div>
                    <h3 className='font-medium text-xl'>{displayName}</h3>
                    {email && <p className='flex items-center gap-2'><FaEnvelope /> {email}</p>}
                    <small className='text-slate-400'>Email Status: {emailVerified ? <span className='text-green-500 font-medium'>Verified</span> : <span className='text-red-500 font-medium'>Not verified</span>}</small>
                    <p>Id: {uid}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
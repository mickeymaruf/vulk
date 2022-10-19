import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useAuth } from '../contexts/UserContext';

const SocialAuth = () => {
    const { signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithTwitter } = useAuth();
    return (
        <div className='text-slate-400 mt-5'>
            <div className='flex items-center mb-3 space-x-5'>
                <div className='w-full flex-1 h-[2px] bg-slate-900'></div>
                <p>Login with social accounts</p>
                <div className=' w-full flex-1 h-[2px] bg-slate-900'></div>
            </div>
            <div className='flex gap-4 justify-center text-2xl'>
                <FaGoogle onClick={signInWithGoogle} className="cursor-pointer hover:text-white" />
                <FaGithub onClick={signInWithGithub} className="cursor-pointer hover:text-white" />
                <FaFacebook onClick={signInWithFacebook} className="cursor-pointer hover:text-white" />
                <FaTwitter onClick={signInWithTwitter} className="cursor-pointer hover:text-white" />
            </div>
        </div>
    );
};

export default SocialAuth;
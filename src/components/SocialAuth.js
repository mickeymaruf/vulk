import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useAuth } from '../contexts/UserContext';

const SocialAuth = () => {
    const { signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithTwitter } = useAuth();
    return (
        <div className='mt-5 flex gap-4 justify-center text-2xl text-slate-400'>
            <FaGoogle onClick={signInWithGoogle} className="cursor-pointer" />
            <FaGithub onClick={signInWithGithub} className="cursor-pointer" />
            <FaFacebook onClick={signInWithFacebook} className="cursor-pointer" />
            <FaTwitter onClick={signInWithTwitter} className="cursor-pointer" />
        </div>
    );
};

export default SocialAuth;
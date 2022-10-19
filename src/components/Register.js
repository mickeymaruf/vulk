import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/UserContext';
import SocialAuth from './SocialAuth';

const Register = () => {
    const [error, setError] = useState(null);
    const { createUser } = useAuth();
    const handleSignUp = (e) => {
        setError(null);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setError('Password didn\'t match!');
            return;
        }
        createUser(email, password)
            .then(result => {
                // 
            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-slate-900">
            <form onSubmit={handleSignUp} className="bg-slate-800 w-11/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 px-10 py-8 rounded-lg mx-auto mt-16">
                <h1 className='text-4xl text-center mb-5'>Signup</h1>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email"
                        className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter your password"
                        className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Confirm password</span>
                    </label>
                    <input type="password" name='confirmPassword' placeholder="Repeat your password"
                        className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                    <div className="mt-2 text-slate-400">
                        <p className='mt-3'>
                            Already have an account? <Link to="/login" className='underline text-blue-500'>Login</Link>
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="w-full bg-indigo-600 py-3 rounded-md">Login</button>
                </div>
                <SocialAuth />
                {
                    error &&
                    <div id='auto-hide' className='bg-red-200 py-3 pl-3 mt-5 rounded-lg'>
                        <p className='text-red-800 font-medium'>{error}</p>
                    </div>
                }
            </form>
        </div>
    );
};

export default Register;
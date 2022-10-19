import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/UserContext';
import SocialAuth from './SocialAuth';

const Login = () => {
    const { loginUser } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname;
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-slate-900">
            <form onSubmit={handleLogin} className="bg-slate-800 w-11/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 px-10 pt-8 pb-6 rounded-lg mx-auto mt-16">
                <h1 className='text-4xl text-center mb-5'>Login</h1>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="*********" className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                    <div className="mt-2 text-slate-400">
                        <Link>Forgot password?</Link>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="w-full bg-indigo-600 py-3 rounded-md font-medium hover:shadow-lg hover:shadow-slate-700">Login</button>
                </div>
                <SocialAuth />
                <div className='mt-3 text-center text-slate-400'>
                    <p>Don't have an account? <Link to="/register" className='underline text-blue-500'>Signup</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
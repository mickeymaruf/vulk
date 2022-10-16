import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-slate-900">
            <div className="bg-slate-800 w-11/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 px-10 py-8 rounded-lg mx-auto mt-16">
                <h1 className='text-4xl text-center mb-5'>Login</h1>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                    <div className="mt-2 text-slate-400">
                        <p>Forgot password?</p>
                        <p className='mt-3'>Don't have an account? <Link to="/register" className='underline text-blue-500'>Signup</Link></p>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="w-full bg-indigo-600 py-3 rounded-md">Login</button>
                </div>
                <div className='mt-5 flex gap-3 justify-center'>
                    <img className='w-8 h-8 cursor-pointer' src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' />
                    <img className='w-8 h-8 cursor-pointer' src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt='' />
                    <img className='w-8 h-8 cursor-pointer' src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt='' />
                    <img className='w-8 h-8 cursor-pointer' src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Login;
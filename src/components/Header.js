import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useAuth();
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const minimizeToggle = () => {
        setToggle(false);
    }
    return (
        <header className='bg-slate-900 py-5'>
            <nav className='w-11/12 mx-auto flex items-center gap-6 relative'>
                <Link to="/"><img className='w-10' src={logo} alt="logo" /></Link>
                <div className={`text-white text-lg md:text-base font-medium flex gap-5 md:gap-8 flex-col md:flex-row z-50 bg-slate-700 backdrop-blur-md bg-opacity-70 md:bg-inherit fixed md:static right-0 ${toggle ? 'top-20' : '-top-[350px]'} w-full items-center justify-center px-16 py-8 md:p-0 rounded-lg md:ml-2 duration-300`}>
                    <NavLink onClick={minimizeToggle} to="/pricing" className='hover:text-indigo-400'>Pricing</NavLink>
                    <NavLink onClick={minimizeToggle} className='hover:text-indigo-400'>Company</NavLink>
                    <NavLink onClick={minimizeToggle} to="/resources" className='hover:text-indigo-400'>Resources</NavLink>
                    {
                        user && user.uid ?
                            <div className='ml-auto'>
                                <NavLink onClick={minimizeToggle} to="/profile" className='hover:text-indigo-400 mr-5'>Profile</NavLink>
                                <NavLink onClick={minimizeToggle} to="/wallet" className='hover:text-indigo-400 mr-5'>Wallet</NavLink>
                                <button onClick={() => { logOut(); setToggle(false) }} className='ml-0 md:ml-auto bg-indigo-500 py-3 px-6 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-slate-700'>Logout</button>
                            </div>
                            :
                            <button onClick={() => { navigate('/login'); setToggle(false) }} className='ml-0 md:ml-auto bg-indigo-500 py-3 px-6 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-slate-700'>Login</button>
                    }
                </div>
                <div className='ml-auto'>
                    <div className='absolute top-0 right-0 md:hidden' onClick={() => setToggle(!toggle)}>
                        {
                            toggle ?
                                <button><XMarkIcon className="h-8 w-8 text-blue-500 inline mt-3 cursor-pointer" /></button>
                                :
                                <button><Bars3Icon className="h-8 w-8 text-blue-500 inline mt-3 cursor-pointer" /></button>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
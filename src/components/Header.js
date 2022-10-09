import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    return (
        <header className='bg-slate-900 py-5'>
            <nav className='w-11/12 mx-auto flex items-center gap-6 relative'>
                <Link to="/"><img className='w-10' src={logo} alt="logo" /></Link>
                <div className={`text-white text-lg md:text-base font-medium flex gap-5 md:gap-8 flex-col md:flex-row bg-slate-700 md:bg-inherit absolute md:static right-0 ${toggle ? 'top-16' : '-top-[250px]'} items-center justify-center px-16 py-5 md:p-0 rounded-lg md:ml-2 duration-300`}>
                    <NavLink className='hover:text-indigo-400' to="/products">Product</NavLink>
                    <NavLink className='hover:text-indigo-400' to="/pricing">Pricing</NavLink>
                    <NavLink className='hover:text-indigo-400'>Company</NavLink>
                    <NavLink className='hover:text-indigo-400'>Resources</NavLink>
                </div>
                <div className='ml-auto'>
                    <button onClick={() => navigate('/products')} className='hidden md:block bg-indigo-500 py-3 px-6 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-slate-700'>Buy Vulk</button>
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
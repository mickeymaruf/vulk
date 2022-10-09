import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.svg'

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='bg-slate-900 py-5'>
            <nav className='w-11/12 mx-auto flex items-center gap-6'>
                <Link to="/"><img className='w-10' src={logo} alt="logo" /></Link>
                <div className='text-white font-medium flex gap-8'>
                    <NavLink to="/products">Product</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink>Company</NavLink>
                    <NavLink>Resources</NavLink>
                </div>
                <div className='ml-auto'>
                    <button onClick={() => navigate('/products')} className='bg-indigo-500 py-3 px-6 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-slate-700'>Buy Vulk</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;